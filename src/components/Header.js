import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
const classes = useStyles();

  return (
    <header>
     <AppBar color={"transparent"}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
                Calendar
            </Typography>
        </Toolbar>
     </AppBar>
    </header>
  );
};

export default Header;
