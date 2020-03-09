import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DayHeaderCell from './daysViewTypeHeader/DayHeaderCell';
import dateViewTypes from '../../../../../utils/dateViewTypes';
import { eachDayOfWeekForDate } from '../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  cellsHeader: {
    marginLeft: '56px',
    paddingBottom: theme.spacing(1),
    display: 'flex',
    flex: '1 0 auto',
  },
  cellWrapper: {
    width: '81px',
    minWidth: '81px',
    display: 'flex',
    flex: '1 0 auto',
    overflow: 'hidden',
    textAlign: 'center',
    padding: theme.spacing(1),
    justifyContent: 'center',
  },
}));

const DaysViewTypeHeader = () => {
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  const areFewDaysToRender = viewType === dateViewTypes.week;
  const classes = useStyles();

  let daysToRender = [selectedDate];
  if (areFewDaysToRender) {
    daysToRender = eachDayOfWeekForDate(selectedDate);
  }

  return (
    <>
      <Box className={classes.cellsHeader}>
        {daysToRender.map(day => {
          return (
            <Box key={day} className={classes.cellWrapper}>
              <DayHeaderCell day={day} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default DaysViewTypeHeader;
