import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMarginLeftRightSpacing from '../hooks/useMarginLeftRightSpacing';

const useStyles = makeStyles(theme => ({
  selectedDateText: {
    fontWeight: '400',
    ...useMarginLeftRightSpacing(theme, 2),
  },
}));

const CurrentDateViewText = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.selectedDateText}>
        Current week/day
      </Typography>
    </>
  );
};

export default CurrentDateViewText;
