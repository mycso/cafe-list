import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {Menu, MenuItem, Tabs, Tab, Button} from "@material-ui/core";
import classes from './ApplicationBar.module.css';


export default function ApplicationBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedTab, setSelectedTab] = React.useState('find');
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <Toolbar className={classes.toolBar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                <MenuIcon color="primary" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Order Online</MenuItem>
                <MenuItem onClick={handleClose}>Our Cafes</MenuItem>
                <MenuItem onClick={handleClose}>Articles</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Partnership</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>

            <Typography color="primary" variant="h3" className={classes.title}>DANCING GOAT</Typography>
            <Hidden xsDown>
                <Hidden mdUp>
                    <Tabs value={selectedTab} onChange={handleTabChange}>
                        <Tab value="order" className={classes.tab} label="Order Online" />
                        <Tab value="find" className={classes.tab} label="Find a Cafe" />
                        <Tab value="contact" className={classes.tab} label="Contact" />
                    </Tabs>
                </Hidden>
                <Hidden smDown>
                    <Tabs value={selectedTab} onChange={handleTabChange}>
                        <Tab value="home" className={classes.tab} label="Home" />
                        <Tab value="order" className={classes.tab} label="Order Online" />
                        <Tab value="find" className={classes.tab} label="Our Cafes" />
                        <Tab value="articles" className={classes.tab} label="Articles" />
                        <Tab value="contact" className={classes.tab} label="Contact" />
                    </Tabs>
                </Hidden>
            </Hidden>
            <Hidden smUp>
                <Button>Contact</Button>
            </Hidden>
        </Toolbar>
    );
}
