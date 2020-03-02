import React, { useState } from 'react';
import { Calendar } from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate } from '../../../modules/calendar';
import { Paper } from '@material-ui/core';

const MiniCalendar = () => {
  const date = useSelector(state => state.calendar.selectedDate);
  const dispatch = useDispatch();

  const handleSetSelectedDate = (date, isFinish) => {
    setSelectedDate(date)(dispatch);
  };

  return (
    <Paper style={{ overflow: 'hidden' }}>
      <Calendar date={date} onChange={handleSetSelectedDate} />
    </Paper>
  );
};

export default MiniCalendar;
