import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HoursScaleCell from './leftSideHoursScale/HoursScaleCell';
import { useSelector } from 'react-redux';
import dateViewTypes from '../../../utils/dateViewTypes';

const useStyles = makeStyles(theme => ({
  scaleWrapper: {
    width: '40px',
    height: 'auto',
  },
}));

const LeftSideHoursScale = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);

  if (!isAllowedRender(viewType)) return;

  return (
    <Box className={classes.scaleWrapper}>
      {renderHourCells(12, 'AM')}
      {renderHourCells(12, 'PM')}
    </Box>
  );
};

function isAllowedRender(viewType) {
  switch (viewType) {
    case dateViewTypes.year:
    case dateViewTypes.month: {
      return false;
    }
    default:
      return true;
  }
}

function renderHourCells(nTimes, hourPeriod) {
  const hourCells = [];

  for (let hour = 1; hour <= nTimes; hour++) {
    hourCells.push(<HoursScaleCell key={`${hour} ${hourPeriod}`} hour={hour} hourPeriod={hourPeriod} />);
  }

  return hourCells;
}

export default LeftSideHoursScale;
