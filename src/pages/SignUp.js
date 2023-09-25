import React from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Copyright from '../components/Copyright'

const defaultTheme = createTheme();

const registerUser = async (firstName, lastName, email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
    }
    fetch('https://localhost:7215/api/Account/register-user', requestOptions)
        .then(response => response.json())
        .then((resultData) => {        
            console.log(resultData);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export default function SignUp() {    
    const handleSubmit = (event) => {        
        event.preventDefault();
        const inputData = new FormData(event.currentTarget);
        
        registerUser( 
            inputData.get('firstName'), 
            inputData.get('lastName'), 
            inputData.get('email'),
            inputData.get('password'));
    };

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
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />                                 
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />                                
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    type="password"                            
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name='password'
                                    autoComplete="current-password"
                                />                        
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
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
        </ThemeProvider>        
    );
}