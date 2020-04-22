import React from 'react';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
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

const EventsListCardContent = ({ events }) => {
  const eventsList = events.map(event => {
    return (
      <ListItem key={event.id} button>
        <EventBlock event={event} considerInterval={false} />
      </ListItem>
    );
  });

  return <List>{eventsList}</List>;
};

export default EventsListCardContent;
