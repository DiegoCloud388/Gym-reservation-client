import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import ValidationTextField from '../components/ValidationTextField';

import AuthService from '../services/auth.service';

const defaultTheme = createTheme();

export default function SignIn() {

    const handleSubmit = (event) => {
        
        event.preventDefault();
        this.setState({
            message: "",
            loading: true
        });

        const inputData = new FormData(event.currentTarget);

        AuthService.login(inputData.get('email'), inputData.get('password')).then(
            () => {
                console.log(inputData.get('email'))
            },
            error => {
                const responseMessage = 
                    (error.response && 
                        error.response.data && 
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: responseMessage
                });
            }
        )
    };

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleChangePassword = (event) => {
       setPassword(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

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
                    <Avatar sx={{
                        m: 1,
                        bgcolor: 'secondary.main'
                    }}>
                        <AccountBoxOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <ValidationTextField 
                            margin="normal"                             
                            required
                            type="email"                            
                            onChange={handleChangeEmail}    
                            fullWidth     
                            id="email"                     
                            label="Email Address"
                            name='email'
                            autoComplete="email"
                            autoFocus
                            value={email}>
                        </ValidationTextField>                        
                        <ValidationTextField
                            margin="normal"
                            required
                            type="password"        
                            onChange={handleChangePassword}                                                      
                            fullWidth                            
                            id="password"
                            label="Password"
                            name='password'
                            autoComplete="current-password"
                            value={password}>
                        </ValidationTextField>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={!email || !password}  
                            variant="contained"
                            sx={{mt: 3, mb: 2}}>
                                Sign In                              
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/sign-up" variant="body2">
                                    {"Don't have an account? Sing Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}