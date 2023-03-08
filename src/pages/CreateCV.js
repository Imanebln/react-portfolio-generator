import {
  Container,
  TextField,
  Typography,
  Paper,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CssBaseline,
  Grid,
  TableRow,
  Table,
  TableHead,
  TableCell,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";
import CreateCVModal from "../components/CreateCVModal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import {
  removeSkill,
  addSkill,
  addImage,
  changeFullname,
  changeEmail,
  changeAge,
  changePhone,
  changeProfile,
} from "../redux/store.js";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TableCostum from "../components/TableCostum";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

// 👇 update mui styles
const useStyles = makeStyles()((theme) => ({
  root: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(100),
      height: theme.spacing(120),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    field: {
      // width: '350px',
    },
    errorMessage: {
      color: "red",
      "& > *": {
        color: "red",
      },
    },
    bgColor: {
      backgroundColor: `linear-gradient(to bottom, #fdfbe9 0%, white 100%)`,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  // border: `2px solid ${theme.palette.background.paper}`,
}));

function CreateCV() {
  // 👇 navigate through app
  const navigate = useNavigate();

  // 👇 update mui styles
  const { classes } = useStyles();

  const theme = createTheme();

  // 👇 update user info
  const dispatch = useDispatch();

  // 👇 get user info
  const userInfo = useSelector((state) => state.user);

  // 👇 modal state
  const [open, setOpen] = useState(false);

  // 👇 image state
  const [image, setImage] = useState();

  // 👇 handle skills TextField using useRef hook
  const skillsRef = useRef();

  // 👇 modal's type state
  const [type, setType] = useState("");

  // 👇 handle open/close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 👇 create yup's schema
  const schema = yup.object().shape({
    fullname: yup.string().required("your fullname is required!"),
    email: yup.string().email().required("your email is required!"),
    phone: yup.string().min(10).required("your phone number is required!"),
    age: yup
      .number()
      .positive()
      .integer("Enter a valid age")
      .min(17)
      .required("your age is required!"),
    profile: yup.string().required("your profile is required!"),
  });

  // 👇 useForm hook using yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 👇 submit form's data
  const onSubmit = async (data) => {
    // console.log(data.image[0].name);
    // dispatch user info
    dispatchData(data);

    const user = {
      image: image,
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      age: data.age,
      profile: data.profile,
      skills: userInfo.skills,
      experiences: userInfo.experiences,
      education: userInfo.education,
    };

    // send data to json server
    await postData(user);
  };

  // 👇 dispatch user info
  const dispatchData = (data) => {
    dispatch(changeFullname(data.fullname));
    dispatch(changeEmail(data.email));
    dispatch(changeAge(data.age));
    dispatch(changePhone(data.phone));
    dispatch(changeProfile(data.profile));
    dispatch(addImage(image));
  };

  // 👇 post request to json server
  const postData = async (user) => {
    await fetch(`http://localhost:8000/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => navigate("/profile"))
      .catch((error) => {
        console.log(error);
      });
  };

  // 👇 Dispatch skills
  const handleAddSkill = () => {
    const ski = skillsRef.current.value.split(",");
    ski.forEach((skill) => {
      dispatch(addSkill(skill));
    });
    skillsRef.current.value = "";
  };

  // 👇 save user to localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userInfo));
  }, [userInfo]);

  // 👇 handle modal type
  const onClick = (event) => {
    handleOpen();
    setType(event);
  };

  // 👇 handle image
  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #fdfbe9 0%, white 100%)`,
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ textTransform: "uppercase" }}
              component="h2"
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              Create Your Curriculum Vitae
            </Typography>
            <Badge
              sx={{ width: "100px", height: "100px", m: 3 }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    required
                    {...register("image")}
                    hidden
                    accept="image/*"
                    name="image"
                    type="file"
                    onChange={handleChange}
                  />
                  <PhotoCamera />
                </IconButton>
              }
            >
              <Avatar
                sx={{ width: "100px", height: "100px", bgcolor: "#FED053" }}
                alt="image"
                src={image}
              />
            </Badge>
            {/* </Avatar> */}
            {/* 👇 form goes here  */}
            <Box
              component="form"
              sx={{ mt: 3 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register("fullname")}
                    fullWidth
                    id="fullname"
                    label="Fulllname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("email")}
                    fullWidth
                    id="email"
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("phone")}
                    fullWidth
                    id="phone"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("age")}
                    fullWidth
                    id="age"
                    label="Age"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("profile")}
                    fullWidth
                    id="profile"
                    label="Profile (ex: web developer)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Skills</InputLabel>
                    <OutlinedInput
                      fullWidth
                      {...register("skills")}
                      inputRef={skillsRef}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            color="primary"
                            onClick={handleAddSkill}
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <AddIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Skills"
                    />
                  </FormControl>

                  {/* 👇 skills goes here  */}
                  <Grid item xs={12}>
                    {userInfo.skills?.map((skill) => (
                      <Button
                        key={skill}
                        sx={{ mt: 1 }}
                        onClick={() => dispatch(removeSkill(skill))}
                      >
                        {skill}
                      </Button>
                    ))}
                  </Grid>
                </Grid>

                {/* 👇 work experiences goes here  */}
                <Grid item xs={12}>
                  <Grid justifyContent="center" container>
                    <Button
                      fullWidth
                      color="primary"
                      sx={{ mt: 3, mb: 2, width: "200px" }}
                      onClick={() => onClick("experience")}
                      required
                    >
                      Add Work Experience
                    </Button>
                  </Grid>
                  <CreateCVModal
                    open={open}
                    handleClose={handleClose}
                    type={type}
                  />

                  {/* table goes here  */}
                  {userInfo.experiences?.length > 0 && (
                    <TableCostum type="experience" edit={true} />
                  )}
                </Grid>

                {/* 👇 education goes here  */}
                <Grid item xs={12}>
                  <Grid justifyContent="center" container>
                    <Button
                      fullWidth
                      color="primary"
                      sx={{ mt: 3, mb: 2, width: "200px" }}
                      onClick={() => onClick("education")}
                      required
                    >
                      Add Education
                    </Button>
                  </Grid>
                  <CreateCVModal
                    open={open}
                    handleClose={handleClose}
                    type={type}
                  />

                  {/* table goes here  */}
                  {userInfo.education?.length > 0 && (
                    <TableCostum type="education" edit={true} />
                  )}

                  <Grid item xs={12} justifyContent="center" container>
                    <Button
                      sx={{ width: "100px", m: 3 }}
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default CreateCV;
