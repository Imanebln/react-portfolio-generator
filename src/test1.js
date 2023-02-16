import { Container, TextField, Typography, Paper, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from "tss-react/mui";
import CreateCVModal from '../components/CreateCVModal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import {addSkill, addExperience, changeFullname, changeEmail, changeAge, changePhone, changeProfile} from '../redux/store.js';
import { useDispatch, useSelector } from 'react-redux';

// const experience = [
//   {
//     title: "Education",
//   },
//   {
//     title: "Work Experience",
//   },
// ]

 // 👇 update mui styles
const useStyles = makeStyles()((theme) => ({
   root: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(100),
      height: theme.spacing(120),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    field: {
      // width: '350px',
    },
    errorMessage: {
      color: 'red',
      '& > *': {
        color: 'red',
      }
    }
  }
  }));

function CreateCV() {

    // 👇 navigate through app
    const navigate = useNavigate();

     // 👇 update mui styles
    const {classes} = useStyles();

     // 👇 update user info
    const dispatch = useDispatch();

     // 👇 get user info
    const userInfo = useSelector((state) => state.user);
    console.log(userInfo);
    // 👇 modal state
    const [open, setOpen] = useState(false);
 

    // 👇 handle skills TextField using useRef hook
    const skillsRef = useRef();

    // 👇 handle open/close modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 👇 create yup's schema
    const schema = yup.object().shape({
      fullname: yup.string().required('your fullname is required!'),
      email: yup.string().email().required('your email is required!'),
      phone: yup.string().min(10).required('your phone number is required!'),
      age: yup.number().positive().integer('Enter a valid age').min(17).required('your age is required!'),
      profile: yup.string().required('your profile is required!'),
    });

    // 👇 useForm hook using yup resolver
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });

    // 👇 submit form's data
    const onSubmit = async (data) => {
      
      // dispatch user info
      dispatchData(data);

      const user = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        age: data.age,
        profile: data.profile,
        skills: userInfo.skills,
        experiences: userInfo.experiences
      }

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
    }

    // 👇 post request to json server
    const postData = async (user) => {
        await fetch(`http://localhost:8000/user`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
      })
      .then(() => navigate('/'))
      .catch(error => { console.log(error)});
    }

    // 👇 Dispatch skills
    const handleAddSkill = () => {
      const ski = skillsRef.current.value.split(',');
      ski.forEach((skill) => {
        dispatch(addSkill(skill));
      })
      skillsRef.current.value = "";
    };
    
    // 👇 save user to localStorage
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(userInfo))
    },[userInfo])

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
        variant='h5'
        color='textSecondary'
        display='flex'
        justifyContent='center'
        marginBottom='50px'
        >
          Add your Curriculum Vitae
        </Typography>
        <TextField
        {...register('fullname')} style={{width: '300px'}} className={classes.field} fullWidth={false} id="outlined-basic" label="Fullname" variant="outlined" />
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {errors.fullname?.message}
        </p>
        <TextField 
        {...register('email')} style={{width: '300px'}} className={classes.field} fullWidth={false} id="outlined-basic" label="Email" variant="outlined" />
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {errors.email?.message}
        </p>
        <TextField {...register('phone')} style={{width: '300px'}} className={classes.field} fullWidth={false} id="outlined-basic" label="Phone" variant="outlined" />
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {errors.phone?.message}
        </p>
        <TextField {...register('age')} style={{width: '300px'}} className={classes.field} fullWidth={false} id="outlined-basic" label="Age" variant="outlined" />
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {/* {errors.age?.message} */}
        </p>
        <TextField {...register('profile')} style={{width: '300px'}} className={classes.field} fullWidth={false} id="outlined-basic" label="Profile (ex : web developer)" variant="outlined" />
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {errors.profile?.message}
        </p>
        <FormControl variant="outlined">
          <InputLabel>Skills</InputLabel>
          <OutlinedInput
          style={{width: '300px'}} 
          fullWidth={false}
          className={classes.field}
          {...register('skills')}
          inputRef={skillsRef}
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  color='primary'
                  onClick={handleAddSkill}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div>{userInfo.skills?.map((skill) => (
          <span key={skill} style={{marginLeft: '3px'}}>
            {skill},
          </span>
        )) }
        </div>
        <p 
        style={{
          marginTop: '2px',
          color: 'red',
        }}
        >
          {errors.skills?.message}
        </p>

          <Button
          color='primary'
          onClick={handleOpen}
          >
          Add Education
          </Button>
        <div style={{marginTop: '0px'}}>
        {userInfo.experiences?.map((exp) => (
          <li key={exp.title}>
            {`${exp.title} at ${exp.company}`}
          </li>
        ))}
        </div>
        <Button
          color='primary'
          onClick={handleOpen}
          >
          Add Work Experience
          </Button>
        <br/><br/>
        <CreateCVModal
         open={open} 
         handleClose={handleClose}
         />
        <Button type='submit' variant="contained">
          Submit
        </Button>
      </form>
    </Paper>
  </div>
  )
}

export default CreateCV