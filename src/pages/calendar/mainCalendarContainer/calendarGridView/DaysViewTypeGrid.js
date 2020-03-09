import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';

import DaysViewTypeHeader from './daysViewTypeGrid/DaysViewTypeHeader';
import usePaddingLeftRightSpacing from '../../../../components/hooks/usePaddingLeftRightSpacing';
import { eachDayOfWeekForDate, hours } from '../../../../utils/calendarGridUtil';
import HourRow from './daysViewTypeGrid/HourRow';
import { useSelector } from 'react-redux';
import dateViewTypes from '../../../../utils/dateViewTypes';

const useStyles = makeStyles(theme => ({
  hoursGrid: {
    ...usePaddingLeftRightSpacing(theme, 1),
    position: 'relative',
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
}));

const DaysViewTypeGrid = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const events = useSelector(state => state.events.items);

  let daysToRender = [selectedDate];
  if (viewType === dateViewTypes.week) {
    daysToRender = eachDayOfWeekForDate(selectedDate);
  }

  return (
    <>
      <Box className={classes.daysHeader}>
        <DaysViewTypeHeader />
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.hoursGrid}>
        {hours.map(({ hour, period }) => {
          return <HourRow key={`${hour}-${period}`} hour={hour} period={period} cells={daysToRender} />;
        })}
      </Box>
    </>
  );
};

export default DaysViewTypeGrid;
