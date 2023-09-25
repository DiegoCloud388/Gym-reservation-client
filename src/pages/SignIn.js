import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

const defaultTheme = createTheme();

const loginUser = async (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    fetch('https://localhost:7215/api/Account/login', requestOptions)
        .then(response => response.json())
        .then((resultData) => {
            console.log(resultData);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: '#E0E3E7',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 4,
      padding: '4px !important', // override inline-style
    },
  });

export default function SignIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputData = new FormData(event.currentTarget);

        loginUser(
            inputData.get('email'),
            inputData.get('password')
        );
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