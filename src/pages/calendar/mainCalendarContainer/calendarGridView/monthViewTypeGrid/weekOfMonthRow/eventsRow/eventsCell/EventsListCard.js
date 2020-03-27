import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import { format, parseISO } from 'date-fns';
import { formatMinutes, get12HoursTimeFormatObj } from '../../../../../../../../utils/calendarGridUtil';
import { NO_TITLE_TEXT } from '../../../../../../../../constants/constants';

import MuiCard from '@material-ui/core/Card';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiCardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';

const Card = withStyles(theme => ({
  root: {
    padding: '0',
  },
}))(MuiCard);

const CardHeader = withStyles(theme => ({}))(MuiCardHeader);

const CardContent = withStyles(theme => ({
  root: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}))(MuiCardContent);

const ListItem = withStyles(theme => ({
  root: {
    padding: '3px 0',
  },
}))(MuiListItem);

const useStyles = makeStyles(theme => ({
  card: {
    width: 210,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const EventsListCard = ({ date, events }) => {
  const classes = useStyles();
  const weekdayShortName = format(date, 'EEE');

  const eventsList = events.map(event => {
    const { convertedHour, minutes, period } = get12HoursTimeFormatObj(parseISO(event.startDate));
    const formattedTimeDisplayText = `${convertedHour}:${formatMinutes(minutes)}${period.toLowerCase()}`;

    return (
      <ListItem key={event.id} button>
        {formattedTimeDisplayText} {event?.title || NO_TITLE_TEXT}
      </ListItem>
    );
  });

  return (
    <Card className={classes.card}>
      <CardHeader>
        <Box>{weekdayShortName}</Box>
        <Box>{date.getDate()}</Box>
      </CardHeader>
      <CardContent>
        <List>{eventsList}</List>
      </CardContent>
    </Card>
  );
};

export default EventsListCard;
