import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import OneDayViewTypeHeader from './calendarGridHeader/OneDayViewTypeHeader';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  headerWrapper: {
    marginLeft: '48px',
  },
}));

const CalendarGridHeader = () => {
  const classes = useStyles();
  const calendarViewType = useSelector(state => state.calendar.viewType);

  return (
    <Box className={classes.headerWrapper}>
      <OneDayViewTypeHeader />
    </Box>
  );
};

export default CalendarGridHeader;
