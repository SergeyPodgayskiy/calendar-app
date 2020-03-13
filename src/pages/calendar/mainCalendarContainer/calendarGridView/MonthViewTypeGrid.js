import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginLeftRightSpacing from '../../../../components/hooks/useMarginLeftRightSpacing';
import { useSelector } from 'react-redux';
import WeekOfMonthRow from './monthViewTypeGrid/WeekOfMonthRow';
import { eachWeekOfMonthForDate } from '../../../../utils/calendarGridUtil';
import WeekdayNamesHeader from './monthViewTypeGrid/WeekdayNamesHeader';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  monthGridWrapper: {
    ...useMarginLeftRightSpacing(theme, -1),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  monthWeeksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginBottom: theme.spacing(-1),
  },
}));

const MonthViewTypeGrid = () => {
  const classes = useStyles();
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  const eachWeekOfMonth = eachWeekOfMonthForDate(selectedDate);

  return (
    <Box className={classes.monthGridWrapper}>
      <WeekdayNamesHeader />
      <Divider />
      <Box className={classes.monthWeeksWrapper}>
        {eachWeekOfMonth.map((startDayOfWeek, weekNumber) => {
          return (
            <WeekOfMonthRow
              key={startDayOfWeek}
              startOfWeek={startDayOfWeek}
              isLastWeek={weekNumber === eachWeekOfMonth.length - 1}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MonthViewTypeGrid;
