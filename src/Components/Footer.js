import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {ReactComponent as TwitterIcon} from "../Media/twitter.svg";
import {ReactComponent as FacebookIcon} from "../Media/facebook.svg";
import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={classes.footer} id="footer">
            <Typography variant="body1">
                Contact<br/>
                (+0) 000-000-0000<br/>
                dancinggoat@localhost.local<br/>
            </Typography>
            <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
                <IconButton href="https://twitter.com" target="_blank">
                    <TwitterIcon />
                </IconButton>
                <IconButton href="https://facebook.com" target="_blank">
                    <FacebookIcon />
                </IconButton>
            </Box>
            <Typography variant="body1">
                Dancing Goat Ltd<br/>
                62 E Lake St Chicago<br/>
                Illinois 60601, USA.<br/>
            </Typography>
        </div>
    );
};
