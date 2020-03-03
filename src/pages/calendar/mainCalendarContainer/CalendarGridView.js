import React from 'react';
import { useSelector } from 'react-redux';
import dateViewTypes from '../../../utils/dateViewTypes';
import YearViewTypeGrid from './calendarGridView/YearViewTypeGrid';
import DaysViewTypeGrid from './calendarGridView/DaysViewTypeGrid';
import MonthViewTypeGrid from './calendarGridView/MonthViewTypeGrid';

const CalendarGridView = () => {
  const viewType = useSelector(state => state.calendar.viewType);

  if (viewType === dateViewTypes.day || dateViewTypes.week) {
    return <DaysViewTypeGrid />;
  }

  if (viewType === dateViewTypes.month) {
    return <MonthViewTypeGrid />;
  }

  if (viewType === dateViewTypes.year) {
    return <YearViewTypeGrid />;
  }
};

export default CalendarGridView;
