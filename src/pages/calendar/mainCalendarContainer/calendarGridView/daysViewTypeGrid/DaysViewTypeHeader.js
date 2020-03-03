import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import DayHeaderCell from './daysViewTypeHeader/DayHeaderCell';
import dateViewTypes from '../../../../../utils/dateViewTypes';
import { eachDayOfWeekForDate } from '../../../calendarGridUtil';

const useStyles = areFewDaysToRender =>
  makeStyles(theme => ({
    cellsHeader: {
      marginLeft: '48px',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: 'flex',
      flex: '1 0 auto',
    },
    cellWrapper: {
      width: '81px',
      minWidth: '81px',
      display: `${areFewDaysToRender ? 'flex' : 'block'}`,
      flex: `${areFewDaysToRender ? '1 0 auto' : 'none'}`,
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
  const classes = useStyles(areFewDaysToRender)();

  let daysToRender = [selectedDate];
  if (areFewDaysToRender) {
    daysToRender = eachDayOfWeekForDate(selectedDate);
  }

  return (
    <>
      <Box className={classes.cellsHeader}>
        {daysToRender.map(day => {
          return (
            <Box className={classes.cellWrapper}>
              <DayHeaderCell day={day} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default DaysViewTypeHeader;
