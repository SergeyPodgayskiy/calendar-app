import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiCard from '@material-ui/core/Card';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiCardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import EventsListCardHeader from './eventsListCard/EventsListCardHeader';
import EventsListCardContent from './eventsListCard/EventsListCardContent';

const Card = withStyles(theme => ({
  root: {
    padding: '0',
  },
}))(MuiCard);

const CardHeader = withStyles(theme => ({
  root: {
    padding: 0,
  },
}))(MuiCardHeader);

const CardContent = withStyles(theme => ({
  root: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}))(MuiCardContent);

const useStyles = makeStyles(theme => ({
  card: {
    width: 210,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
}));

const EventsListCard = ({ date, events, handleCloseCard }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader subheader={<EventsListCardHeader date={date} handleCloseCard={handleCloseCard} />} />
      <CardContent>
        <EventsListCardContent events={events} />
      </CardContent>
    </Card>
  );
};

export default EventsListCard;
