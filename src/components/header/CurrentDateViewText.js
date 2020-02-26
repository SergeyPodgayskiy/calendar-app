import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    selectedDateText: {
        fontWeight: '400',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
}));

const CurrentDateViewText = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" className={classes.selectedDateText}>Current week/day</Typography>
        </>
    );
};

export default CurrentDateViewText;