import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import usePaddingTopBottomSpacing from '../../../components/hooks/usePaddingTopBottomSpacing';
import { useSelector, useDispatch } from 'react-redux';
import OneDayViewTypeHeader from './calendarGridHeader/OneDayViewTypeHeader';

const useStyles = makeStyles(theme => ({}));

const CalendarGridHeader = () => {
  const classes = useStyles();
  const calendarViewType = useSelector(state => state.calendar.viewType);

  return (
    <>
      <OneDayViewTypeHeader />
    </>
  );
};

export default CalendarGridHeader;
