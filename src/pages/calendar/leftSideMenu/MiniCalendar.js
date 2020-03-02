import React, { useState } from 'react';
import { Calendar } from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate } from '../../../modules/calendar';

const MiniCalendar = () => {
  const date = useSelector(state => state.calendar.selectedDate);
  const dispatch = useDispatch();

  const handleSetSelectedDate = (date, isFinish) => {
    setSelectedDate(date)(dispatch);
  };

  return <Calendar date={date} onChange={handleSetSelectedDate} />;
};

export default MiniCalendar;
