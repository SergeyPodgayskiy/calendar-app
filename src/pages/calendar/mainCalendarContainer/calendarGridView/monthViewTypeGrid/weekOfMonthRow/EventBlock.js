import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { convertHourFormat24To12 } from '../../../../../../utils/calendarGridUtil';
import { getHours, parseISO } from 'date-fns';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  eventBlock: {
    width: '100%',
    cursor: 'pointer',
    color: 'rgba(32,33,36,0.38)',
    fontWeight: 500,
    height: '2em',
    padding: '0 4px',
    margin: '2px 4px',
    fontSize: 12,
    borderRadius: 4,
    overflow: 'hidden',
    outline: 'none',
    display: 'flex',
    transition: 'background-color 100ms linear',
    '&:hover': {
      backgroundColor: '#f1f3f4',
    },
  },
  eventInfo: {
    alignItems: 'center',
    display: 'flex',
    overflow: 'hidden',
    color: 'white',
  },
  eventInfo__circle: {
    borderRadius: '50%',
    border: '4px solid',
  },
  eventInfo__time: {
    marginRight: 4,
    whiteSpace: 'nowrap',
  },
  eventInfo__title: {
    flex: '0 1 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const EventBlock = ({ event }) => {
  const classes = useStyles();
  const formattedTime = convertHourFormat24To12(getHours(parseISO(event.startDate)));

  return (
    <Box role={'button'} className={classes.eventBlock} style={{ backgroundColor: event.calendarType.color }}>
      <Box component="span" className={classes.eventInfo}>
        <Box component="span" className={classes.eventInfo__time}>
          {formattedTime}
        </Box>
        <Box component="span" className={classes.eventInfo__title}>
          {event?.title}
        </Box>
      </Box>
    </Box>
  );
};

export default EventBlock;
