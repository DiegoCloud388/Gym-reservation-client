import React from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Link } from "react-router-dom";

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

/*function GetTemperature() {    
    const [weatherForecast, setItems] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7215/WeatherForecast')
            .then(response => response.json())
            .then((result) => {                 
                console.log(result);
                setItems(result);
            })      
    }, []);   
    
    return (
        <div>
            {weatherForecast}
        </div>
    );
}*/

export default function SignUp() {    
    const handleSubmit = (event) => {        
        event.preventDefault();
        fetch('https://localhost:7215/WeatherForecast')
            .then(response => response.json())
            .then((result) => {                 
                console.log(result);
            });

        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        });
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