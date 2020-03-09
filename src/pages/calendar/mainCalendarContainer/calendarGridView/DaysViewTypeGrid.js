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
  daysHeader: {},
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
  divider: {
    marginBottom: theme.spacing(1),
  },
}));

const DaysViewTypeGrid = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

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
          return <HourRow key={`${hour}-${period}`} hour={hour} period={period} days={daysToRender} />;
        })}
      </Box>
    </>
  );
};

export default DaysViewTypeGrid;
