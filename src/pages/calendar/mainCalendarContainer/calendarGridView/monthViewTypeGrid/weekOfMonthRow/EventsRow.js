import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import EventsCell from './eventsRow/EventsCell';
import useClientRect from '../../../../../../components/hooks/useClientRect';

const useStyles = makeStyles(theme => ({
  eventsRowWrapper: {
    marginTop: 40,
    flex: '1 1 0%',
  },
  events: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
}));

const EventsRow = ({ days }) => {
  const classes = useStyles();
  const [rowRect, setRowRect] = useClientRect();

  return (
    <Box className={classes.eventsRowWrapper} ref={setRowRect}>
      <Box className={classes.events}>
        {days.map((day, weekdayNumber) => (
          <EventsCell key={weekdayNumber} day={day} isStartOfRow={weekdayNumber === 0} parentRowRect={rowRect} />
        ))}
      </Box>
    </Box>
  );
};

export default EventsRow;
