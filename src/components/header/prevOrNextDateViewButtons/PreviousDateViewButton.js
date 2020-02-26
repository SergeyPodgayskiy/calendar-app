import React from 'react';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  previousDateViewButton: {
    marginLeft: theme.spacing(1),
  },
}));

const PreviousDateViewButton = () => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-label="Previous week/day/month"
        size="small"
        color="inherit"
        className={classes.previousDateViewButton}
      >
        <NavigateBeforeRoundedIcon fontSize="medium" />
      </IconButton>
    </>
  );
};

export default PreviousDateViewButton;
