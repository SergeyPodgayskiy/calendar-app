import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import EventsListCardPopover from './EventsListCardPopover';

const useStyles = makeStyles(theme => ({
  textBlock: {
    cursor: 'pointer',
    fontWeight: 500,
    height: '2em',
    outline: 'none',
    transition: 'background-color 100ms linear',
    backgroundColor: 'transparent',
    fontSize: 12,
    borderRadius: 4,
    display: 'flex',
    padding: '0 2px',
    margin: '1px 0',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#f1f3f4',
    },
  },
}));

const NotShownEventsTextBlock = ({ text, date, eventsToShow }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenEventsCardPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box className={classes.textBlock} onClick={handleOpenEventsCardPopover}>
        {text}
      </Box>
      <EventsListCardPopover events={eventsToShow} date={date} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default NotShownEventsTextBlock;
