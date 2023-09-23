import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import MySnackbar from '../components/MySnackbar'

function Copyright(props) {
    return (
        <Typography variant='body2' color="text.secondary" align='center' {...props}>
            {'Copyright ©'}
            <Link color='inherit' href="https://mui.com/">
                test.web.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

export default function SignIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputData = new FormData(event.currentTarget);

        loginUser(
            inputData.get('email'),
            inputData.get('password')
        );
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
                            fullWidth 
                            id="email" 
                            label="Email Address"
                            name='email'
                            autoComplete="email"
                            autoFocus>
                        </TextField>                        
                        <TextField
                            margin="normal"
                            required
                            type="password"                            
                            fullWidth
                            id="password"
                            label="Password"
                            name='password'
                            autoComplete="current-password">
                        </TextField>
                        <Button
                            type="submit"
                            fullWidth
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