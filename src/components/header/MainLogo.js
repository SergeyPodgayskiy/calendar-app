import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

}));

const MainLogo = (props) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5">
                Calendar
            </Typography>
        </>
    );
};

export default MainLogo;