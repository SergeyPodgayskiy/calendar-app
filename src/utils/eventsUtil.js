import { isSameDay, isWithinInterval, parseISO, differenceInMinutes, eachDayOfInterval } from 'date-fns';

function findEventsOfTheGivenDate(events, date) {
  return events.filter(event => {
    const isEventWithinInterval = isWithinInterval(date, {
      start: parseISO(event.startDate),
      end: parseISO(event.endDate),
    });

    return isSameDay(date, parseISO(event.startDate)) || isEventWithinInterval;
  });
}

function sortEvents(events, comparators) {
  let sortedEvents = events;

  if (events && comparators) {
    comparators.forEach(comparator => {
      sortedEvents = sortedEvents.sort(comparator);
      console.debug(`events after sort ${comparator.name}`, sortedEvents);
    });
  }

  return sortedEvents;
}

function compareEventsByMinutesAsc(firstEvent, secondEvent) {
  if (firstEvent && secondEvent) {
    return differenceInMinutes(parseISO(firstEvent.startDate), parseISO(secondEvent.startDate));
  }
  return 0;
}

function compareEventsByDaysInterval(firstEvent, secondEvent) {
  if (firstEvent && secondEvent) {
    const firstEventInterval = {
      start: parseISO(firstEvent.startDate),
      end: parseISO(firstEvent.endDate),
    };
    const secondEventInterval = {
      start: parseISO(secondEvent.startDate),
      end: parseISO(secondEvent.endDate),
    };
    const firstEventIntervalLength = eachDayOfInterval(firstEventInterval).length;
    const secondEventIntervalLength = eachDayOfInterval(secondEventInterval).length;

    if (firstEventIntervalLength > 1 && secondEventIntervalLength > 1) {
      return 0;
    }
    if (firstEventIntervalLength > 1) {
      return -1;
    }
    console.debug('firstEventInterval', eachDayOfInterval(firstEventInterval).length);
  }
  return 0;
}

export { findEventsOfTheGivenDate, sortEvents, compareEventsByMinutesAsc, compareEventsByDaysInterval };
