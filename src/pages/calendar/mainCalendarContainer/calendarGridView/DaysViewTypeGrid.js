import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';

import DaysViewTypeHeader from './daysViewTypeGrid/DaysViewTypeHeader';
import usePaddingLeftRightSpacing from '../../../../components/hooks/usePaddingLeftRightSpacing';
import { hours } from '../../calendarGridUtil';
import HourRow from './daysViewTypeGrid/HourRow';
import { useSelector } from 'react-redux';
import dateViewTypes from '../../../../utils/dateViewTypes';
import { startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

const useStyles = makeStyles(theme => ({
  hourRowWrapper: {
    minHeight: '48px',
    height: 'auto',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    lineHeight: 'initial',
  },
  hoursGrid: {
    ...usePaddingLeftRightSpacing(theme, 1),
  },
}));

const DaysViewTypeGrid = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  let datesToRender = [selectedDate];

  if (viewType === dateViewTypes.week) {
  }

  return (
    <>
      <Box className={classes.calendarHeaderWrapper}>
        <DaysViewTypeHeader />
      </Box>
      <Divider />
      <Box className={classes.hoursGrid}>
        {hours.map(({ hour, period }) => {
          return <HourRow hour={hour} period={period} cellsNumber={1} />;
        })}
      </Box>
    </>
  );
};

export default DaysViewTypeGrid;
