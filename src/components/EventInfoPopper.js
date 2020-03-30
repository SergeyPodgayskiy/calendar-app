import React from 'react';
import EventInfoCard from './EventInfoCard';
import { ClickAwayListener, Popper } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const EventInfoPopper = ({ event, anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);
  const popperId = open ? event?.id : undefined;

  const handleCloseEventsInfoPopper = () => {
    setAnchorEl(null);
  };

  return (
    <Popper id={popperId} open={open} anchorEl={anchorEl} transition style={{ zIndex: 10000 }}>
      <ClickAwayListener onClickAway={handleCloseEventsInfoPopper}>
        <Box>
          <EventInfoCard event={event} handleCloseCard={handleCloseEventsInfoPopper} />
        </Box>
      </ClickAwayListener>
    </Popper>
  );
};

export default EventInfoPopper;
