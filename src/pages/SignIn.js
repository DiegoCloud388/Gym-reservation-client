import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography, TextField, Snackbar, Alert, createTheme, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Copyright from '../components/Copyright';

import AuthService from '../services/auth.service';
import { useEffect } from 'react';

const defaultTheme = createTheme();

export default function SignIn() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [openErrSnackbar, setOpenErrSnackbar] = useState(false);
    const [loading, setLoading] = useState(false);

    const now = new Date();
    const dateTimeNow = now.toISOString();

    function handleChangePassword(event) {
       setPassword(event.target.value);
    };

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    useEffect(() => {
        localStorage.clear();
    });

    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenErrSnackbar(false);
        setLoading(false);
      };

    function handleSubmit(event) {        
        setLoading((prevLoading) => !prevLoading);
        event.preventDefault();

        const inputData = new FormData(event.currentTarget);

        AuthService.login(
            inputData.get('email'), 
            inputData.get('password')
        ).then((response) => {
            if (response.accessToken !== '' && response.expiration >= dateTimeNow) {       
                navigate('/paperbase');
            } else {
                setOpenErrSnackbar(true);
            }      
        }).catch((error) => console.log(error));            
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
                        <TextField 
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
                        </TextField>                        
                        <TextField
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
                        </TextField>
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={!email || !password || loading}
                                variant="contained"
                                sx={{mt: 3, mb: 2}}>
                                    Sign In                              
                            </Button>
                            {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: 'primary',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px'
                                    }}
                                />
                            )}
                        </Box>                        
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
            <Snackbar open={openErrSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>User cannot successful sign in.</Alert>
            </Snackbar>
        </ThemeProvider>        
    )
}