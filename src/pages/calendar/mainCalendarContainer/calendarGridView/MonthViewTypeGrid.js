import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginLeftRightSpacing from '../../../../components/hooks/useMarginLeftRightSpacing';
import { useDispatch, useSelector } from 'react-redux';
import WeekOfMonthRow from './monthViewTypeGrid/WeekOfMonthRow';
import { eachWeekOfMonthForDate } from '../../../../utils/calendarGridUtil';
import WeekdayNamesHeader from './monthViewTypeGrid/WeekdayNamesHeader';
import Divider from '@material-ui/core/Divider';
import debounce from 'lodash/debounce';
import dateViewTypes from '../../../../utils/dateViewTypes';
import { setNextDatePeriod, setPrevDatePeriod } from '../../../../modules/calendar';

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
  const dispatch = useDispatch();
  const eachWeekOfMonth = eachWeekOfMonthForDate(selectedDate);

  const handleOnWheel = debounce(e => {
    // scrolling up
    if (e.deltaY < 0) {
      setPrevDatePeriod(selectedDate, dateViewTypes.month)(dispatch);
    }
    // scrolling down
    if (e.deltaY > 0) {
      setNextDatePeriod(selectedDate, dateViewTypes.month)(dispatch);
    }
  }, 100);

  return (
    <Box
      className={classes.monthGridWrapper}
      onWheel={e => {
        e.persist();
        handleOnWheel(e);
      }}
    >
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
