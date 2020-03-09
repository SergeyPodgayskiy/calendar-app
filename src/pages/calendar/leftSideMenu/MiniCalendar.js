import React from 'react';
import { Calendar } from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate } from '../../../modules/calendar';
import { isDate } from 'date-fns';
import Box from '@material-ui/core/Box';

const MiniCalendar = ({ dateToSelect, theme }) => {
  const selectedDateFromState = useSelector(state => state.calendar.selectedDate);
  const date = isDate(dateToSelect) ? dateToSelect : selectedDateFromState;
  const dispatch = useDispatch();

  const handleSetSelectedDate = (date, isFinish) => {
    setSelectedDate(date)(dispatch);
  };

  return (
    <Box style={{ overflow: 'hidden' }}>
      <Calendar allowKeyboardControl={false} date={date} onChange={handleSetSelectedDate} theme={theme} />
    </Box>
  );
};

export default MiniCalendar;
