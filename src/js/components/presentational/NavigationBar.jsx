import React from 'react'
import { Link } from 'react-router-dom'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Styles
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

//const classes = useStyles();

// Navigation Component that allows the user to switch between different modules
const NavigationBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6">Perceptive Patient</Typography>
                    <div>
                        <Button color="inherit">Console</Button>
                        <Button color="inherit">Variables</Button>
                        <Button color="inherit">Report</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}


export default NavigationBar;