import { AppBar, Avatar, Button, Grid, IconButton, Link, Tab, Tabs, Toolbar, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import * as React from 'react';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export default function Header(props) {
    const { onDrawerToggle } = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start">
                                    <MenuIcon></MenuIcon>
                            </IconButton> 
                        </Grid>
                        <Grid item xs/>
                        <Grid item>
                            <Link
                                href="/"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white'
                                    }                                    
                                }}
                                rel="noopener noreferrer"
                                target="_blank">
                                    Go to docs
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Avatar src="/1-sm.jpeg" alt="My Avatar"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" color="primary" position="static" elevation={0} sx={{ zIndex: 0}}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                Authentication
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{ borderColor: lightColor }}
                                variant="outlined"
                                color="inherit"
                                size="small"
                            >
                                Web setup
                            </Button>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>            
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={0} textColor="inherit">
                    <Tab label="Users" />
                    <Tab label="Sign-in method" />
                    <Tab label="Templates" />
                    <Tab label="Usage" />
                </Tabs>
            </AppBar>
        </React.Fragment>        
    );    
}

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired
};