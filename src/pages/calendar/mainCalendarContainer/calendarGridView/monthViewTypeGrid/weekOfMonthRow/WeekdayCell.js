import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginTopBottomSpacing from '../../../../../../components/hooks/useMarginTopBottomSpacing';
import Divider from '@material-ui/core/Divider';
import { isToday, isFirstDayOfMonth, format, isSameDay, parseISO, eachDayOfInterval, getHours } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setViewType } from '../../../../../../modules/calendar';
import dateViewTypes from '../../../../../../utils/dateViewTypes';
import EventLine from './weekdayCell/EventLine';
import UseClientRect from '../../../../../../components/hooks/useClientRect';
import { getWidthInPercent } from '../../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  dayOfMonthCellWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  cellHeader: {
    textAlign: 'center',
    width: '100%',
  },
  cellHeaderDateNumber: {
    ...useMarginTopBottomSpacing(theme, 1),
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '.3px',
    whiteSpace: 'nowrap',
    width: 'max-content',
    minWidth: 40,
    textAlign: 'center',
    display: 'inline-block',
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 50,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f1f3f4',
    },
  },
  activeDate: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3f51b5',
    },
  },
  content: {
    flexGrow: 1,
    padding: 5,
  },
}));

const WeekdayCell = ({ day, isInLastWeek, parentRect, dayNumberInRow }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const events = useSelector(state => state.events.items);
  const eventsOfThisDay = events.filter(event => isSameDay(parseISO(event.startDate), day));

  const [cellRect, setCellRect] = UseClientRect();
  const cellWidthInPercent = getWidthInPercent(cellRect, parentRect);

  const formattedNameOfMonth = isFirstDayOfMonth(day) ? format(day, 'MMM') : null;

  let eventLinesToRender;

  if (cellWidthInPercent) {
    eventLinesToRender = eventsOfThisDay?.map(event => {
      const startDate = parseISO(event.startDate);
      const endDate = parseISO(event.endDate);
      const eventDurationInDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
      }).length;

      let isAllDayEvent = false;
      let eventBlockWidthInPercent;
      const leftShift = cellWidthInPercent * dayNumberInRow;

      // TODO: add logic for case when eventDurationInDays width > parent width (need to implement shift to nex line)
      if (eventDurationInDays > 0) {
        eventBlockWidthInPercent = cellWidthInPercent * eventDurationInDays;
      } else {
        isAllDayEvent = getHours(startDate) === 24;
        eventBlockWidthInPercent = cellWidthInPercent;
      }

      return (
        <EventLine
          key={startDate + endDate}
          event={event}
          left={leftShift}
          width={eventBlockWidthInPercent}
          isOneOrMoreDays={isAllDayEvent || eventDurationInDays > 0}
        />
      );
    });
  }

  const handleSelectDate = () => {
    setSelectedDate(day)(dispatch);
    setViewType(dateViewTypes.day)(dispatch);
  };

  return (
    <Box className={classes.dayOfMonthCellWrapper} ref={setCellRect}>
      <Box className={classes.cellHeader}>
        <Box
          className={`${classes.cellHeaderDateNumber} ${isToday(day) ? classes.activeDate : ''}`}
          onClick={handleSelectDate}
        >
          {formattedNameOfMonth} {day.getDate()}
        </Box>
      </Box>
      <Box className={classes.content}>{eventLinesToRender}</Box>
      {!isInLastWeek && <Divider />}
    </Box>
  );
};

export default WeekdayCell;
