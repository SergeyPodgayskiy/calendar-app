import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { format, isToday } from 'date-fns';

const useStyles = isOneCell =>
  makeStyles(theme => ({
    headerCell: {
      width: '81px',
      minWidth: '81px',
      display: `${isOneCell ? 'block' : 'flex'}`,
      flex: `${isOneCell ? 'none' : '1 0 auto'}`,
      overflow: 'hidden',
      textAlign: 'center',
      padding: theme.spacing(1),
      justifyContent: 'center',
    },
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
    },
    activeCircle: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
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

const CalendarGridHeaderCell = () => {
  const classes = useStyles(true)();
  const currentDate = useSelector(state => state.calendar.currentDate);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  const selectedDayOfWeekName = format(selectedDate, dayOfWeekNameFormat);
  const selectedDateOfMonth = format(selectedDate, dayOfMonthNumberFormat);
  const isSelectedDateIsToday = isToday(selectedDate);
  console.log(classes.dayNameCaption);

  return (
    <Box className={classes.headerCell}>
      <Typography variant="overline" display="block">
        <Box className={`${classes.dayNameCaption} ${isSelectedDateIsToday ? classes.activeDayNameCaption : ''}`}>
          {selectedDayOfWeekName}
        </Box>
        <Box className={`${classes.circle} ${isSelectedDateIsToday ? classes.activeCircle : ''}`}>
          <Typography variant="caption" display={'block'} className={classes.dayNumberCaption}>
            {selectedDateOfMonth}
          </Typography>
        </Box>
      </Typography>
    </Box>
  );
};

export default CalendarGridHeaderCell;
