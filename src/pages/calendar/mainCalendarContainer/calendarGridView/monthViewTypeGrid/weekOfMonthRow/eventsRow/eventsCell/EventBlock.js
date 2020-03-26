import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { convertHourFormat24To12, get12HourFormatText } from '../../../../../../../../utils/calendarGridUtil';
import { getHours, parseISO } from 'date-fns';
import { Box } from '@material-ui/core';
import { findEventsOfTheGivenDate } from '../../../../../../../../utils/eventsUtil';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: '1px 0',
  },
  eventBlockCommon: {
    cursor: 'pointer',
    fontWeight: 500,
    height: '2em',
    outline: 'none',
    transition: 'background-color 100ms linear',
    '&:hover': {
      backgroundColor: '#f1f3f4',
    },
  },
  eventBlock: {
    fontSize: 12,
    borderRadius: 4,
    display: 'flex',
    // margin: '2px 0',
    padding: '0 2px',
    position: 'relative',
    color: 'rgba(32,33,36,0.38)',
    // overflow: 'hidden',
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
  intervalIndicator: {
    position: 'absolute',
    top: 0,
    left: '-16%',
    width: '20%',
  },
}));

const EventBlock = ({ event, isStartOfEvent, isStartOfRow, positionToShift }) => {
  const classes = useStyles();
  const eventStartDate = parseISO(event.startDate);
  const formattedTime = get12HourFormatText(eventStartDate);

  return (
    <Box className={classes.wrapper}>
      <Box
        role={'button'}
        className={`${classes.eventBlockCommon} ${classes.eventBlock}`}
        style={{
          backgroundColor: event.calendarType.color,
          marginTop: `${positionToShift ? `${positionToShift * 2.2}em` : ''}`,
        }}
      >
        {isStartOfEvent || isStartOfRow ? (
          <Box component="span" className={classes.eventInfo}>
            {false && (
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
        ) : (
          <Box
            className={`${classes.intervalIndicator} ${classes.eventBlockCommon}`}
            style={{ backgroundColor: event.calendarType.color }}
          />
        )}
      </Box>
    </Box>
  );
};

export default EventBlock;
