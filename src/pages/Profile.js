import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import TableCostum from "../components/TableCostum";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Badge,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import {
  removeSkill,
  addImage,
  changeFullname,
  changeEmail,
  changeAge,
  changePhone,
  changeProfile,
} from "../redux/store.js";
import { useForm } from "react-hook-form";
import { PhotoCamera } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Skills from "../components/Skills";
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined";
import CreateCVModal from "../components/CreateCVModal";

const theme = createTheme();

function Profile() {
  // 👇 edit state
  const [edit, setEdit] = useState(false);

  // 👇 modal's type state
  const [type, setType] = useState("");

  // 👇 modal state
  const [open, setOpen] = useState(false);

  // 👇 handle open/close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 👇 handle edit
  const handleEdit = () => {
    setEdit(!edit);
  };

  // 👇 dispatch user info
  const dispatchData = (data) => {
    dispatch(changeFullname(`${data.firstname} ${data.lastname}`));
    dispatch(changeEmail(data.email));
    dispatch(changeAge(data.age));
    dispatch(changePhone(data.phone));
    dispatch(changeProfile(data.profile));
    dispatch(addImage(image || userInfo.image));
  };

  // 👇 handle submit
  const onSubmit = (data) => {
    dispatchData(data);
    setEdit(!edit);
  };

  // 👇 get user info
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);

  // 👇 update user info
  const dispatch = useDispatch();

  // 👇 useForm hook
  const { register, handleSubmit } = useForm();

  // 👇 image state
  const [image, setImage] = useState();

  // 👇 handle image
  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // 👇 handle modal type
  const onClick = (event) => {
    handleOpen();
    setType(event);
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
            <Badge
              sx={{ width: "100px", height: "100px", m: 2 }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                edit && (
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
                )
              }
            >
              <Avatar
                sx={{ width: "100px", height: "100px", bgcolor: "#FED053" }}
                alt="image"
                src={image || userInfo.image}
              />
            </Badge>
            <Typography component="h1" variant="h5">
              My Profile
            </Typography>
            <IconButton onClick={handleEdit}>
              {edit ? (
                <Tooltip title="Disable Edit">
                  <EditOffOutlinedIcon color="primary" />
                </Tooltip>
              ) : (
                <Tooltip title="Enable Edit">
                  <EditOutlinedIcon color="primary" />
                </Tooltip>
              )}
            </IconButton>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    {...register("firstname")}
                    name="firstname"
                    fullWidth
                    id="firstname"
                    label="Firstname"
                    defaultValue={userInfo?.fullname?.split(" ")[0]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    name="lastname"
                    {...register("lastname")}
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    defaultValue={userInfo?.fullname?.split(" ")[1]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    name="email"
                    {...register("email")}
                    fullWidth
                    id="email"
                    label="Email Adress"
                    defaultValue={userInfo?.email || ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    name="phone"
                    {...register("phone")}
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    defaultValue={userInfo?.phone || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    name="age"
                    {...register("age")}
                    fullWidth
                    id="age"
                    label="Age"
                    defaultValue={userInfo?.age || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      readOnly: Boolean(!edit),
                    }}
                    name="profile"
                    {...register("profile")}
                    fullWidth
                    id="profile"
                    label="Profile"
                    defaultValue={userInfo?.profile || ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  {edit ? (
                    <Skills register={register} edit={edit} />
                  ) : (
                    <Typography
                      component="h2"
                      variant="h6"
                      color="textSecondary"
                      gutterBottom
                    >
                      {userInfo.skills.length ? "Skills" : ""}
                    </Typography>
                  )}
                </Grid>
                {/* 👇 skills goes here  */}
                <Grid item xs={12}>
                  {userInfo.skills?.map((skill) => (
                    <Tooltip title={edit && "Remove"}>
                      <Button
                        sx={{
                          opacity: edit ? 1 : 0.9,
                          cursor: edit ? "pointer" : "not-allowed",
                          mt: 1,
                        }}
                        key={skill}
                        onClick={() => edit && dispatch(removeSkill(skill))}
                      >
                        {skill}
                      </Button>
                    </Tooltip>
                  ))}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }}>
                  {edit && (
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
                  )}
                  <CreateCVModal
                    open={open}
                    handleClose={handleClose}
                    type={type}
                  />

                  {/* table goes here  */}
                  {userInfo.education?.length > 0 && (
                    <TableCostum type="education" edit={edit} />
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }}>
                  {edit && (
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
                  )}
                  <CreateCVModal
                    open={open}
                    handleClose={handleClose}
                    type={type}
                  />

                  {/* table goes here  */}
                  {userInfo.experiences?.length > 0 && (
                    <TableCostum type="experience" edit={edit} />
                  )}
                </Grid>
              </Grid>
              {edit && (
                <Grid container justifyContent="center" item xs={12}>
                  <Button
                    sx={{ width: "100px" }}
                    type="submit"
                    fullWidth
                    variant="outlined"
                  >
                    Submit
                  </Button>
                </Grid>
              )}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
