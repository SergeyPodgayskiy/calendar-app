import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { format, isToday } from 'date-fns';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate, setViewType } from '../modules/calendar';
import dateViewTypes from '../utils/dateViewTypes';

const useStyles = makeStyles(theme => ({
  circle: {
    width: '40px',
    height: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'none',
    cursor: 'pointer',
  },
  activeCircle: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  passiveCircle: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  dayNameCaption: {
    lineHeight: '1.4rem',
    fontWeight: '600',
    color: theme.palette.text.secondary,
  },
  activeDayNameCaption: {
    color: theme.palette.primary.light,
  },
  dayNumberCaption: {
    fontSize: '1.3rem',
  },
}));

// Date formats
const dayOfWeekNameFormat = 'iii';
const dayOfMonthNumberFormat = 'd';

const DayHeaderCell = ({ day, dayNumberFontSize = '1.3rem' }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const viewType = useSelector(state => state.calendar.viewType);

  const selectedDayOfWeekName = format(day, dayOfWeekNameFormat);
  const selectedDateOfMonth = format(day, dayOfMonthNumberFormat);
  const isSelectedDateIsToday = isToday(day);

  const handleSelectDate = () => {
    if (viewType !== dateViewTypes.day) {
      dispatch(setSelectedDate(day));
      dispatch(setViewType(dateViewTypes.day));
    }
  };

  return (
    <>
      <Typography variant="overline" display="block">
        <Box className={`${classes.dayNameCaption} ${isSelectedDateIsToday ? classes.activeDayNameCaption : ''}`}>
          {selectedDayOfWeekName}
        </Box>
        <Box
          className={`${classes.circle} ${isSelectedDateIsToday ? classes.activeCircle : classes.passiveCircle}`}
          onClick={handleSelectDate}
        >
          <Typography
            variant="caption"
            display={'block'}
            className={classes.dayNumberCaption}
            style={{ fontSize: dayNumberFontSize }}
          >
            {selectedDateOfMonth}
          </Typography>
        </Box>
      </Typography>
    </>
  );
};

export default DayHeaderCell;
