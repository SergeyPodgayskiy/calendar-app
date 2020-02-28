import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
  },
  column: {},
}));

const CalendarGridHeader = () => {
  const classes = useStyles();

  return <div className={classes.row}></div>;
};

export default CalendarGridHeader;
