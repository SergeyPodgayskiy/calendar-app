import React, { useMemo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import EventBlock from './eventsCell/EventBlock';
import useClientRect from '../../../../../../../components/hooks/useClientRect';
import { getWidthInPercent } from '../../../../../../../utils/calendarGridUtil';
import { useSelector } from 'react-redux';
import { parseISO, isSameDay, isAfter } from 'date-fns';
import {
  compareEventsByDaysInterval,
  compareEventsByMinutesAsc,
  findEventsOfTheGivenDate,
  sortEvents,
} from '../../../../../../../utils/eventsUtil';
import NotShownEventsTextBlock from './eventsCell/NotShownEventsTextBlock';

const EVENTS_NUMBER_TO_SHOW_PER_CELL = 4;

const useStyles = makeStyles(theme => ({
  eventCell: {
    flex: '1 1 0%',
    padding: '2px 4px',
    borderRight: '1px solid transparent',
  },
}));

const EventsCell = ({ day, daysOfRow, parentRowRect, isStartOfRow }) => {
  const classes = useStyles();
  const eventsFromStorage = useSelector(state => state.events.items);
  const [cellRect, setCellRect] = useClientRect();
  const cellWidthInPercent = getWidthInPercent(cellRect, parentRowRect);

  let eventsOfTheDay = findEventsOfTheGivenDate(eventsFromStorage, day);
  let eventsToShowPerCell;
  let notShownNumberOfEvents;

  if (eventsOfTheDay.length > 0) {
    eventsToShowPerCell = sortEvents(eventsOfTheDay, [compareEventsByMinutesAsc, compareEventsByDaysInterval]);
    eventsToShowPerCell = eventsToShowPerCell.slice(0, EVENTS_NUMBER_TO_SHOW_PER_CELL);
    notShownNumberOfEvents = eventsOfTheDay.length - eventsToShowPerCell.length;

    eventsToShowPerCell = eventsToShowPerCell.map((event, positionNumberOfEvent) => {
      const eventStartDate = parseISO(event.startDate);
      const isStartOfEvent = isSameDay(eventStartDate, day);

      let positionNumberToShiftEvent = null;
      if (!isStartOfEvent) {
        const startDateOfTheRow = daysOfRow[0];
        const dateToFindEvents = isAfter(startDateOfTheRow, eventStartDate) ? startDateOfTheRow : eventStartDate;
        let eventsOfTheGivenDate = findEventsOfTheGivenDate(eventsFromStorage, dateToFindEvents);
        eventsOfTheGivenDate = sortEvents(eventsOfTheGivenDate, [
          compareEventsByMinutesAsc,
          compareEventsByDaysInterval,
        ]);
        //TODO: to have a ID for event and find position by ID
        const positionNumberOfEventOfStartDate = eventsOfTheGivenDate.findIndex(
          eventOfGivenDate => eventOfGivenDate.id === event.id,
        );
        positionNumberToShiftEvent = positionNumberOfEventOfStartDate - positionNumberOfEvent;
      }

      return (
        <EventBlock
          key={event.startDate + positionNumberOfEvent}
          event={event}
          isStartOfEvent={isStartOfEvent}
          isStartOfRow={isStartOfRow}
          positionToShift={positionNumberToShiftEvent}
        />
      );
    });
  }

  return (
    <Box className={classes.eventCell} ref={setCellRect} style={{ width: cellWidthInPercent }}>
      {eventsToShowPerCell}
      {Boolean(notShownNumberOfEvents) && (
        <NotShownEventsTextBlock text={`${notShownNumberOfEvents} more`} date={day} eventsToShow={eventsOfTheDay} />
      )}
    </Box>
  );
};

export default EventsCell;
