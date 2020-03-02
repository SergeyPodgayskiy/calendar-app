import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CalendarGridHeaderCell from './CalendarGridHeaderCell';

const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    flex: '1 0 auto',
  },
}));

const OneDayViewTypeHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      <CalendarGridHeaderCell />
    </Box>
  );
};

export default OneDayViewTypeHeader;
