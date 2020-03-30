import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NO_TITLE_TEXT } from '../../constants/constants';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import { parseISO, isSameDay, format } from 'date-fns';
import { get12HoursTimeFormatObj } from '../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  mainInfoSection: {
    marginBottom: 12,
    paddingRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    minHeight: 32,
  },
  mainInfoContent: {
    padding: '6px 0',
  },
  minorInfoSection: {
    paddingRight: theme.spacing(2),
    display: 'flex',
  },
  iconWrapper: {
    paddingLeft: theme.spacing(2),
    maxHeight: 36,
    minWidth: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    fontSize: 20,
  },
  calendarTypeIcon: {
    width: 14,
    height: 14,
    borderRadius: 4,
    marginTop: 3,
    marginLeft: 3,
  },
  mainText: {
    fontSize: 22,
    maxHeight: 56,
    color: '#3c4043',
    overflow: 'hidden',
    wordWrap: 'break-word',
  },
  capitalizeFirstLetter: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
}));
const EVENT_DATE_FORMAT = 'MMMM d, yyyy';

const EventInfoCardContent = ({ event }) => {
  const classes = useStyles();
  const eventStartDate = parseISO(event.startDate);
  const eventEndDate = parseISO(event.endDate);
  const startDateTimeObj = get12HoursTimeFormatObj(eventStartDate);
  const endDateTimeObj = get12HoursTimeFormatObj(eventEndDate);

  let eventDateText = `${format(eventStartDate, EVENT_DATE_FORMAT)} ${startDateTimeObj.convertedHour}:${
    startDateTimeObj.minutes
  }${startDateTimeObj.period.toLowerCase()}`;

  if (isSameDay(eventStartDate, eventEndDate)) {
    eventDateText += ` - ${endDateTimeObj.convertedHour}:${
      endDateTimeObj.minutes
    }${endDateTimeObj.period.toLowerCase()}`;
  } else {
    eventDateText += ` - ${format(eventEndDate, EVENT_DATE_FORMAT)} ${endDateTimeObj.convertedHour}:${
      endDateTimeObj.minutes
    }${endDateTimeObj.period.toLowerCase()}`;
  }

  return (
    <>
      <Box className={classes.mainInfoSection}>
        <Box className={classes.iconWrapper}>
          <Box className={classes.calendarTypeIcon} style={{ backgroundColor: event.calendarType.color }} />
        </Box>
        <Box className={classes.mainInfoContent}>
          <Box className={classes.mainText}>{event.title ? event.title : NO_TITLE_TEXT}</Box>
          <Box>{eventDateText}</Box>
        </Box>
      </Box>
      <Box className={classes.minorInfoSection}>
        <Box className={classes.iconWrapper}>
          <EventRoundedIcon fontSize={'inherit'} />
        </Box>
        <Box className={classes.capitalizeFirstLetter}>{event.calendarType.value}</Box>
      </Box>
    </>
  );
};

export default EventInfoCardContent;
