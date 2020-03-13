import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMarginTopBottomSpacing from '../../../../../../components/hooks/useMarginTopBottomSpacing';
import Divider from '@material-ui/core/Divider';
import { isToday } from 'date-fns';
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
    minWidth: 24,
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

const WeekdayCell = ({ day, isInLastWeek }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
          {day.getDate()}
        </Box>
      </Box>
      <Box className={classes.content}>events</Box>
      {!isInLastWeek && <Divider />}
    </Box>
  );
};

export default WeekdayCell;
