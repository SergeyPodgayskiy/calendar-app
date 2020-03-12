import React from 'react';
import { Box } from '@material-ui/core';
import { eachDayOfInterval, endOfWeek } from 'date-fns';
import WeekdayCell from './weekOfMonthRow/WeekdayCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  weekOfMonth: {
    display: 'flex',
  },
}));

const WeekOfMonthRow = ({ startOfWeek }) => {
  const classes = useStyles();
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeek(startOfWeek),
  });

  return (
    <Box className={classes.weekOfMonth}>
      {daysOfWeek.map(day => {
        return <WeekdayCell key={day} day={day} />;
      })}
    </Box>
  );
};

export default WeekOfMonthRow;
