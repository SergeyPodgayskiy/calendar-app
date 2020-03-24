import React from 'react';
import { Box } from '@material-ui/core';
import { eachDayOfInterval, endOfWeek, isSameDay, parseISO } from 'date-fns';
import WeekdayCell from './weekOfMonthRow/WeekdayCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import useClientRect from '../../../../../components/hooks/useClientRect';
import { useSelector } from 'react-redux';
import EventBlock from './weekOfMonthRow/EventBlock';

const MAX_EVENTS_ROW_HEIGHT_EM = '5em';

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
  eventsPresentationWrapper: {
    marginTop: 40,
    flex: '1 1 0%',
  },
  events: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
}));

const WeekOfMonthRow = ({ startOfWeek, isLastWeek }) => {
  const classes = useStyles();
  const [rowRect, setRowRect] = useClientRect();

  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeek(startOfWeek),
  });

  const eventsFromStorage = useSelector(state => state.events.items);

  let weekdayToEvents = [];
  daysOfWeek.forEach(day => {
    weekdayToEvents.push(eventsFromStorage.filter(event => isSameDay(parseISO(event.startDate), day)));
  });

  return (
    <>
      <Box className={classes.weekOfMonth} ref={setRowRect}>
        <Box className={classes.absoluteRow}>
          {daysOfWeek.map((day, dayNumber) => {
            return (
              <React.Fragment key={day}>
                <WeekdayCell day={day} isInLastWeek={isLastWeek} parentRect={rowRect} dayNumberInRow={dayNumber} />
                {dayNumber !== 6 && <Divider orientation={'vertical'} />}
              </React.Fragment>
            );
          })}
        </Box>
        <Box className={classes.eventsPresentationWrapper}>
          <Box className={classes.events}>
            {weekdayToEvents.map((events, index) => {
              return (
                <Box key={index} style={{ flex: '1 1 0%' }}>
                  {events.map((event, index) => (
                    <EventBlock key={event.startDate + index} event={event} />
                  ))}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      {!isLastWeek && <Divider />}
    </>
  );
};

export default WeekOfMonthRow;
