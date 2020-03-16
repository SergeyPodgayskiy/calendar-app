import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getHours, parseISO } from 'date-fns';
import { convertHourFormat24To12 } from '../../../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  eventLineWrapper: {
    position: 'absolute',
    height: 24,
    paddingRight: theme.spacing(1),
  },
  eventLine: {
    cursor: 'pointer',
    color: 'rgba(32,33,36,0.38)',
    fontWeight: 500,
    height: 22,
    padding: '0 8px',
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

const EventLine = ({ event, left, width, isOneOrMoreDays }) => {
  const classes = useStyles();
  const formattedTime = convertHourFormat24To12(getHours(parseISO(event.startDate)));
  return (
    <Box className={classes.eventLineWrapper} style={{ width: `${width}%`, left: `${left}%` }}>
      <Box
        role={'button'}
        className={classes.eventLine}
        style={{ backgroundColor: isOneOrMoreDays ? event.calendarType.color : 'transparent' }}
      >
        <Box component="span" className={classes.eventInfo}>
          {!isOneOrMoreDays && (
            <Box
              className={classes.eventInfo__circle}
              style={{ marginRight: 6, borderColor: event.calendarType.color }}
            />
          )}
          <Box component="span" className={classes.eventInfo__time}>
            {formattedTime}
          </Box>
          <Box component="span" className={classes.eventInfo__title}>
            {event?.title}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventLine;
