import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import TableCostum from '../components/TableCostum';

const theme = createTheme();

function Profile() {

    const userInfo = useSelector((state) => state.user);
    console.log(userInfo);

  return (
    <div>
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='sm'>
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <Avatar sx={{ width: '100px', height: '100px', m: 2, bgcolor:'#FED053' }} alt="image" src={userInfo.image} />
                    <Typography component="h1" variant="h5">
                        My Profile
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    name="firstname"
                                    fullWidth
                                    id="firstname"
                                    label="Firstname"
                                    value={userInfo?.fullname.split(" ")[0]}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField 
                                    name="lastname"
                                    fullWidth
                                    id="lastname"
                                    label="Lastname"
                                    value={userInfo?.fullname.split(" ")[1]}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField 
                                    name="email"
                                    fullWidth
                                    id="email"
                                    label="Email Adress"
                                    value={userInfo?.email || ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField 
                                    name="phone"
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    value={userInfo?.phone || ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField 
                                    name="age"
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    value={userInfo?.age || ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField 
                                    name="profile"
                                    fullWidth
                                    id="profile"
                                    label="Profile"
                                    value={userInfo?.profile || ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField 
                                    name="skills"
                                    fullWidth
                                    id="skills"
                                    label="Skills"
                                    value={[...userInfo?.skills] || ""}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{mb:3}}>
                                <TableCostum type='education' />
                            </Grid>
                            <Grid item xs={12} sx={{mb:3}}>
                                <TableCostum type='experience' />
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Box>
            </Container>
        </ThemeProvider>
    </div>
  )
}

export default Profile