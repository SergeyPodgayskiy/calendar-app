import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Calendar } from '@material-ui/pickers';
import CreateEventButton from './leftSideMenu/CreateEventButton';
import { makeStyles } from '@material-ui/core/styles';
import useMarginTopBottomSpacing from '../hooks/useMarginTopBottomSpacing';

const useStyles = makeStyles(theme => ({
  createEventButtonWrapper: {
    ...useMarginTopBottomSpacing(theme, 1),
  },
  miniCalendarWrapper: {
    ...useMarginTopBottomSpacing(theme, 3),
  },
}));

// TODO: implement & add 'My Calendars' component
const LeftSideMenu = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Box className={classes.createEventButtonWrapper}>
        <CreateEventButton />
      </Box>
      <Box className={classes.miniCalendarWrapper}>
        <Calendar date={date} onChange={setDate} />
      </Box>
    </>
  );
};

export default LeftSideMenu;
