import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    nextDateViewButton: {
        marginRight: theme.spacing(1)
    }
}));

const NextDateViewButton = () => {
    const classes = useStyles();

    return (
        <>
            <IconButton aria-label="Next week/day/month" size="small" color="inherit" className={classes.nextDateViewButton}>
                <NavigateNextRoundedIcon fontSize="medium" />
            </IconButton>
        </>
    );
};

export default NextDateViewButton;