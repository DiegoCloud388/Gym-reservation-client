import { ThemeProvider } from "@emotion/react";
import { GlobalStyles, createTheme } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const defaultTheme = createTheme();

export default function Layout() {
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/sign-in">Sign In</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Outlet />
    //</>
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none'} }}/>

    </ThemeProvider>
  )
};