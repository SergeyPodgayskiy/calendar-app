import React from 'react';
import { Box } from '@material-ui/core';
import { eachDayOfInterval, endOfWeek } from 'date-fns';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import useClientRect from '../../../../../components/hooks/useClientRect';
import WeekdayCell from './weekOfMonthRow/WeekdayCell';
import EventsRow from './weekOfMonthRow/EventsRow';

const useStyles = makeStyles(theme => ({
  weekOfMonth: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    flex: '1 1 0%',
  },
  absoluteRow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
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
    <>
      <Box className={classes.weekOfMonth} ref={setRowRect}>
        <Box className={classes.absoluteRow}>
          {daysOfWeek.map((day, weekdayNumber) => {
            return (
              <React.Fragment key={day}>
                <WeekdayCell day={day} isInLastWeek={isLastWeek} parentRect={rowRect} dayNumberInRow={weekdayNumber} />
                {weekdayNumber !== 6 && <Divider orientation="vertical" />}
              </React.Fragment>
            );
          })}
        </Box>
        <EventsRow days={daysOfWeek} />
      </Box>
      {!isLastWeek && <Divider />}
    </>
  );
};

export default WeekOfMonthRow;
