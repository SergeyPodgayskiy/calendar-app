import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiCard from '@material-ui/core/Card';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiCardContent from '@material-ui/core/CardContent';
import EventInfoCardHeader from './eventInfoCard/EventInfoCardHeader';
import EventInfoCardContent from './eventInfoCard/EventInfoCardContent';

const Card = withStyles(theme => ({
  root: {
    padding: '0',
    paddingBottom: theme.spacing(2),
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
    width: 450,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
}));

const EventInfoCard = ({ event, handleCloseCard }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader subheader={<EventInfoCardHeader event={event} handleCloseCard={handleCloseCard} />} />
      <CardContent>
        <EventInfoCardContent event={event} />
      </CardContent>
    </Card>
  );
};

export default EventInfoCard;
