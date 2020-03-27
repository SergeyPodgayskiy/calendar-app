import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import EventsListCard from './EventsListCard';

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

  const handleToggleEventsCardDialog = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'events-list-popover' : null;

  return (
    <>
      <Box className={classes.textBlock} onClick={handleToggleEventsCardDialog}>
        {text}
      </Box>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleToggleEventsCardDialog}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <EventsListCard date={date} events={eventsToShow} />
      </Popover>
    </>
  );
};

export default NotShownEventsTextBlock;
