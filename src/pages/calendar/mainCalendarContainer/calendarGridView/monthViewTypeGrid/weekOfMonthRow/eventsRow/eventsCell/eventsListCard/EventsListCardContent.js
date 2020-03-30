import React from 'react';
import { formatMinutes, get12HoursTimeFormatObj } from '../../../../../../../../../utils/calendarGridUtil';
import { parseISO } from 'date-fns';
import { NO_TITLE_TEXT } from '../../../../../../../../../constants/constants';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import EventBlock from '../EventBlock';

const List = withStyles(theme => ({
  root: {
    padding: 8,
  },
}))(MuiList);

const ListItem = withStyles(theme => ({
  root: {
    padding: '1px 0',
  },
}))(MuiListItem);

const useStyles = makeStyles(theme => ({}));

const EventsListCardContent = ({ events }) => {
  const classes = useStyles();

  const eventsList = events.map(event => {
    const { convertedHour, minutes, period } = get12HoursTimeFormatObj(parseISO(event.startDate));
    const formattedTimeDisplayText = `${convertedHour}:${formatMinutes(minutes)}${period.toLowerCase()}`;

    return (
      <ListItem key={event.id} button>
        <EventBlock event={event} considerInterval={false} />
        {/*{formattedTimeDisplayText} {event?.title || NO_TITLE_TEXT}*/}
      </ListItem>
    );
  });

  return <List>{eventsList}</List>;
};

export default EventsListCardContent;
