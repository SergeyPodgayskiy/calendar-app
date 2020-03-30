import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { get12HoursTimeFormatObj, formatMinutes } from '../../../../../../../../utils/calendarGridUtil';
import { parseISO, isPast, differenceInHours } from 'date-fns';
import { Box, lighten, darken } from '@material-ui/core';
import { NO_TITLE_TEXT } from '../../../../../../../../constants/constants';

const useStyles = (eventColor, eventDurationLessThanOneDay) =>
  makeStyles(theme => ({
    wrapper: {
      padding: '1px 0',
      width: '100%',
    },
    eventBlockCommon: {
      cursor: 'pointer',
      fontWeight: 500,
      height: '2em',
      outline: 'none',
      transition: 'background-color 100ms linear',
      backgroundColor: eventColor,
      '&:hover': {
        backgroundColor: `${eventDurationLessThanOneDay ? '#f1f3f4' : ''}`,
      },
    },
    eventBlock: {
      fontSize: 12,
      borderRadius: 4,
      display: 'flex',
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
      letterSpacing: 0,
    },
    intervalIndicator: {
      position: 'absolute',
      top: 0,
      left: '-16%',
      width: '20%',
    },
    'eventBlock--lessThanDayEvent': {
      backgroundColor: 'transparent',
      color: 'inherit',
      fontWeight: 500,
    },
    'eventInfo--lessThanDayEvent': {
      color: 'inherit',
    },
    'eventInfo__time--lessThanDayEvent': {
      fontWeight: 400,
      color: 'inherit',
    },
  }));

const EventBlock = ({ event, isStartOfEvent, isStartOfRow, considerInterval = true, positionToShift }) => {
  let eventColor = event.calendarType.color;
  eventColor = isPast(parseISO(event.endDate)) ? lighten(eventColor, 0.3) : eventColor;
  const eventEndDate = parseISO(event.endDate);
  const eventStartDate = parseISO(event.startDate);
  const eventDurationLessThanOneDay = differenceInHours(eventEndDate, eventStartDate) < 24;
  const classes = useStyles(eventColor, eventDurationLessThanOneDay)();
  const { convertedHour, minutes, period } = get12HoursTimeFormatObj(eventStartDate);
  const formattedTimeDisplayText = `${convertedHour}:${formatMinutes(minutes)}${period.toLowerCase()}`;

  return (
    <Box className={classes.wrapper}>
      <Box
        role={'button'}
        className={`${classes.eventBlockCommon} ${classes.eventBlock} ${
          eventDurationLessThanOneDay ? classes['eventBlock--lessThanDayEvent'] : ''
        }`}
        style={{
          marginTop: `${positionToShift ? `${positionToShift * 2.2}em` : ''}`,
        }}
      >
        {isStartOfEvent || isStartOfRow || !considerInterval ? (
          <Box
            component="span"
            className={`${classes.eventInfo} ${
              eventDurationLessThanOneDay ? classes['eventInfo--lessThanDayEvent'] : ''
            }`}
          >
            {eventDurationLessThanOneDay && (
              <Box
                className={classes.eventInfo__circle}
                style={{ marginRight: 6, borderColor: event.calendarType.color }}
              />
            )}
            <Box
              component="span"
              className={`${classes.eventInfo__time} ${
                eventDurationLessThanOneDay ? classes['eventInfo__time--lessThanDayEvent'] : ''
              }`}
            >
              {formattedTimeDisplayText}
            </Box>
            <Box component="span" className={classes.eventInfo__title}>
              {event?.title || NO_TITLE_TEXT}
            </Box>
          </Box>
        ) : (
          <Box
            className={`${classes.intervalIndicator} ${classes.eventBlockCommon}`}
            style={{ backgroundColor: eventColor }}
          />
        )}
      </Box>
    </Box>
  );
};

export default EventBlock;
