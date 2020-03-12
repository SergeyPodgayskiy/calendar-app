import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginLeftRightSpacing from '../../../../components/hooks/useMarginLeftRightSpacing';
import useMarginTopBottomSpacing from '../../../../components/hooks/useMarginTopBottomSpacing';
import { useSelector } from 'react-redux';
import WeekOfMonthRow from './monthViewTypeGrid/WeekOfMonthRow';
import { eachWeekOfMonthForDate, weekdayShortNames } from '../../../../utils/calendarGridUtil';
import WeekdayNamesHeader from './monthViewTypeGrid/WeekdayNamesHeader';

const useStyles = makeStyles(theme => ({
  monthGridWrapper: {
    ...useMarginLeftRightSpacing(theme, -1),
    ...useMarginTopBottomSpacing(theme, -1),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const MonthViewTypeGrid = () => {
  const classes = useStyles();
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  const eachWeekOfMonth = eachWeekOfMonthForDate(selectedDate);

  return (
    <Box className={classes.monthGridWrapper}>
      <WeekdayNamesHeader />
      {eachWeekOfMonth.map(startDayOfWeek => {
        return <WeekOfMonthRow key={startDayOfWeek} startOfWeek={startDayOfWeek} />;
      })}
    </Box>
  );
};

export default MonthViewTypeGrid;
