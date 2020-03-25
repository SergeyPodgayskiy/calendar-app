import React, { useMemo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import EventBlock from './eventsCell/EventBlock';
import useClientRect from '../../../../../../../components/hooks/useClientRect';
import { getWidthInPercent } from '../../../../../../../utils/calendarGridUtil';
import { useSelector } from 'react-redux';
import { parseISO, isSameDay } from 'date-fns';
import {
  compareEventsByDaysInterval,
  compareEventsByMinutesAsc,
  findEventsOfTheGivenDate,
  sortEvents,
} from '../../../../../../../utils/eventsUtil';

const useStyles = makeStyles(theme => ({
  eventCell: {
    flex: '1 1 0%',
    padding: '2px 4px',
    borderRight: '1px solid transparent',
  },
}));

const EventsCell = ({ day, parentRowRect, isStartOfRow }) => {
  const classes = useStyles();
  const eventsFromStorage = useSelector(state => state.events.items);
  const [cellRect, setCellRect] = useClientRect();
  const cellWidthInPercent = getWidthInPercent(cellRect, parentRowRect);

  let eventsOfTheDay = findEventsOfTheGivenDate(eventsFromStorage, day);

  if (eventsOfTheDay.length > 0) {
    console.log(`Before sort : ${day}`, eventsOfTheDay);
    eventsOfTheDay = sortEvents(eventsOfTheDay, [compareEventsByMinutesAsc, compareEventsByDaysInterval]);
  }

  return (
    <Box className={classes.eventCell} ref={setCellRect} style={{ width: cellWidthInPercent }}>
      {eventsOfTheDay?.map((event, eventNumber) => (
        <EventBlock
          key={event.startDate + eventNumber}
          event={event}
          isStartOfEvent={isSameDay(parseISO(event.startDate), day)}
          isStartOfRow={isStartOfRow}
        />
      ))}
    </Box>
  );
};

export default EventsCell;
