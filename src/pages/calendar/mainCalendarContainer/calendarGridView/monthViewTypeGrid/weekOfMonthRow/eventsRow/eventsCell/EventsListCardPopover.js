import React from 'react';
import EventsListCard from './EventsListCard';
import Popover from '@material-ui/core/Popover';

const EventsListCardPopover = ({ events, date, anchorEl, setAnchorEl }) => {
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'events-list-popover' : null;

  const handleCloseEventsCardPopover = () => {
    setAnchorEl(null);
  };

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleCloseEventsCardPopover}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
    >
      <EventsListCard date={date} events={events} handleCloseCard={handleCloseEventsCardPopover} />
    </Popover>
  );
};

export default EventsListCardPopover;
