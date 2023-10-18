import React, { useState } from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Alert, Box, Button, Container, CssBaseline, Grid, Snackbar, ThemeProvider, TextField, Typography, createTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Copyright from '../components/Copyright'

import AuthService from '../services/auth.service';

const defaultTheme = createTheme();

export default function SignUp() {     

    const handleSubmit = (event) => {        
        event.preventDefault();

        const inputData = new FormData(event.currentTarget);

        AuthService.register(
            inputData.get('firstName'), 
            inputData.get('lastName'), 
            inputData.get('email'),
            inputData.get('password')
        ).then((response) => {
            if(response.email !== '') {
                setOpenSuccSnackbar(true);
                navigate('/sign-in');
            } else {
                setOpenErrSnackbar(true);
            }
        }).catch(error => console.log(error));                      
    };
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSuccSnackbar, setOpenSuccSnackbar] = React.useState(false);
    const [openErrSnackbar, setOpenErrSnackbar] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSuccSnackbar(false);
        setOpenErrSnackbar(false);
      };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
     };

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                        <AccountBoxOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"                                    
                                    required
                                    onChange={handleFirstNameChange}
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={firstName}
                                />                                 
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    fullWidth
                                    onChange={handleLastNameChange}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    onChange={handleChangeEmail}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                />                                
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    onChange={handleChangePassword}
                                    type="password"                            
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name='password'
                                    autoComplete="current-password"
                                    value={password}
                                />                        
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={!firstName || !lastName || !email || !password}
                            variant="contained"
                            sx={{ mt: 3, mb: 2}}
                        >Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link variant="body2" to="/sign-in">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5}}/>
            </Container>
            <Snackbar open={openSuccSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>User successful create account.</Alert>
            </Snackbar>
            <Snackbar open={openErrSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>User cannot create account.</Alert>
            </Snackbar>
        </ThemeProvider>        
    );
}