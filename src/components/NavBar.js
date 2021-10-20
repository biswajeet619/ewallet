import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CustomBtn from './CustomBtn';
import logo from '../ewallet1.jpg';
import { Toolbar, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { useHistory } from "react-router-dom";
import './NavBar.css'





const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': {
            flexDirection: "column"
        }
    },
    logo: {
        width: "35%",
        '@media (max-width:780px)': {
            display: "none"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    },

})

function NavBar(props) {

    const classes = styles()
    let id = sessionStorage.getItem('id');
    let history = useHistory();
    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/")
        window.parent.location = window.parent.location.href;
    }
    // const [currentPage, setState] = useState(false)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/wallet">E-WALLET</a>
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                    </Typography>
                    {id!=null?
                        <Typography variant="h6" className={classes.menuItem}>
                            <Link to="/wallet"> Your Account Balance </Link>
                        </Typography>
                        : <h1></h1>}
                    {id!=null ?
                        <Typography variant="h6" className={classes.menuItem}>
                            <Link to="/rewards"> Claim Rewards </Link>
                        </Typography>
                        : <h1></h1>}
                    {id!=null ?
                        <Typography variant="h6" className={classes.menuItem}>
                            <Link onClick={() => handleLogout()} to="/"> LOGOUT </Link>
                        </Typography>
                        : <h1></h1>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar