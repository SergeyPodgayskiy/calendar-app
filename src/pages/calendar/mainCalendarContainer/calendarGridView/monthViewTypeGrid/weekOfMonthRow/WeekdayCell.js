import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginTopBottomSpacing from '../../../../../../components/hooks/useMarginTopBottomSpacing';
import { isToday, isFirstDayOfMonth, format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setSelectedDate, setViewType } from '../../../../../../modules/calendar';
import dateViewTypes from '../../../../../../utils/dateViewTypes';

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
}));

const WeekdayCell = ({ day, isInLastWeek, parentRect, dayNumberInRow }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formattedNameOfMonth = isFirstDayOfMonth(day) ? format(day, 'MMM') : null;

  const handleSelectDate = () => {
    setSelectedDate(day)(dispatch);
    setViewType(dateViewTypes.day)(dispatch);
  };

  return (
    <Box className={classes.dayOfMonthCellWrapper}>
      <Box className={classes.cellHeader}>
        <Box
          className={`${classes.cellHeaderDateNumber} ${isToday(day) ? classes.activeDate : ''}`}
          onClick={handleSelectDate}
        >
          {formattedNameOfMonth} {day.getDate()}
        </Box>
      </Box>
    </Box>
  );
};

export default WeekdayCell;
