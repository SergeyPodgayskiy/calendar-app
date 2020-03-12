import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  dayOfMonthCell: {
    flexGrow: 1,
  },
}));

const WeekdayCell = ({ day }) => {
  const classes = useStyles();

  return <Box className={classes.dayOfMonthCell}>{day.getDate()}</Box>;
};

export default WeekdayCell;
