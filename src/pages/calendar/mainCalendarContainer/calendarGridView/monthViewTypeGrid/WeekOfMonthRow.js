import React from 'react';
import { Box } from '@material-ui/core';
import { eachDayOfInterval, endOfWeek } from 'date-fns';
import WeekdayCell from './weekOfMonthRow/WeekdayCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import useClientRect from '../../../../../components/hooks/useClientRect';

const useStyles = makeStyles(theme => ({
  weekOfMonth: {
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
  },
}));

const WeekOfMonthRow = ({ startOfWeek, isLastWeek }) => {
  const classes = useStyles();
  const [rowRect, setRowRect] = useClientRect();
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeek(startOfWeek),
  });

  return (
    <Box className={classes.weekOfMonth} ref={setRowRect}>
      {daysOfWeek.map((day, dayNumber) => {
        return (
          <React.Fragment key={day}>
            <WeekdayCell day={day} isInLastWeek={isLastWeek} parentRect={rowRect} dayNumberInRow={dayNumber} />
            {dayNumber !== 6 && <Divider orientation={'vertical'} />}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default WeekOfMonthRow;
