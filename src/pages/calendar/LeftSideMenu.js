import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import CreateEventButton from './leftSideMenu/CreateEventButton';
import { makeStyles } from '@material-ui/core/styles';
import usePaddingTopBottomSpacing from '../../components/hooks/usePaddingTopBottomSpacing';
import MiniCalendar from './leftSideMenu/MiniCalendar';

const useStyles = makeStyles(theme => ({
  createEventButtonWrapper: {
    ...usePaddingTopBottomSpacing(theme, 1),
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
      <Box className={classes.miniCalendarWrapper}>
        <MiniCalendar />
      </Box>
    </>
  );
};

export default LeftSideMenu;
