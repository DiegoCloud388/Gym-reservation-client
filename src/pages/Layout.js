import { ThemeProvider } from "@emotion/react";
import { AppBar, Button, CssBaseline, GlobalStyles, Link, Toolbar, Typography, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const defaultTheme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none'} }}/>
        <CssBaseline/>
        <AppBar 
          position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid $(theme.pallette.divider)`}}>
            <Toolbar sx={{ flexWrap: 'wrap'}}>
              <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}}>
                <nav>
                  <Link href="/" variant="button" color="text.primary" sx={{ my: 1, mx: 1.5}}>My First React App</Link>
                </nav>                
              </Typography>
              <nav>                
                <Link href="/sign-in" variant="button" color="text.primary" sx={{ my: 1, mx: 1.5}}>Sign in</Link>
              </nav>
              <Button href="/sign-up" variant="outlined" sx={{ my: 1, mx: 1.5 }}>Sign up</Button>
            </Toolbar>
        </AppBar>
        
        <Outlet/>
    </ThemeProvider>
  )
};