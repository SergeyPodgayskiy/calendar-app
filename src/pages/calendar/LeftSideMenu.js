import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import CreateEventButton from './leftSideMenu/CreateEventButton';
import { makeStyles } from '@material-ui/core/styles';
import usePaddingTopBottomSpacing from '../../components/hooks/usePaddingTopBottomSpacing';
import MiniCalendar from './leftSideMenu/MiniCalendar';
import EventForm from './leftSideMenu/EventForm';

const useStyles = makeStyles(theme => ({
  createEventButtonWrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  miniCalendarWrapper: {
    ...usePaddingTopBottomSpacing(theme, 3),
  },
}));

// TODO: implement & add 'My Calendars' component
const LeftSideMenu = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.createEventButtonWrapper}>
        <CreateEventButton />
      </Box>
      <EventForm />
      <Box className={classes.miniCalendarWrapper}>
        <MiniCalendar />
      </Box>
    </>
  );
};

export default LeftSideMenu;
