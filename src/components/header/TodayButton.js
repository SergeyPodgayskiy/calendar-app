import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    todayButton: {
        border: "1px solid #dadce0",
        textTransform: 'none',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
}));

const TodayButton = () => {
    const classes = useStyles();

    return (
        <>
            <Button
                variant="outlined"
                size="small"
                color="inherit"
                className={classes.todayButton}
            >
                Today
            </Button>
        </>
    );
};

export default TodayButton;