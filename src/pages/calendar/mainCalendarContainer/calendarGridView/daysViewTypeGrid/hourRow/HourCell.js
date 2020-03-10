import React, { useEffect, useRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import usePaddingTopBottomSpacing from '../../../../../../components/hooks/usePaddingTopBottomSpacing';
import Divider from '@material-ui/core/Divider';
import usePaddingLeftRightSpacing from '../../../../../../components/hooks/usePaddingLeftRightSpacing';
import { useSelector } from 'react-redux';
import TimeIndicator from './hourCell/TimeIndicator';
import { isToday, set, isSameHour } from 'date-fns';
import { calculateTimeIndicatorPositionShift } from '../../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  cellWrapper: {
    minHeight: '48px',
    height: 'auto',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    lineHeight: 'initial',
    ...usePaddingTopBottomSpacing(theme, 1),
    flexGrow: '1',
    position: 'relative',
  },
  cellContent: {
    ...usePaddingTopBottomSpacing(theme, 1),
    ...usePaddingLeftRightSpacing(theme, 1),
  },
}));

const HourCell = ({ hour, day }) => {
  const classes = useStyles();
  const cellElement = useRef();
  const cellDate = set(day, {
    hours: hour,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const currentDate = useSelector(state => state.calendar.currentDate);
  const isCurrentDateWithinInterval = isSameHour(currentDate, cellDate);
  let positionShift;

  useEffect(() => {
    positionShift =
      isCurrentDateWithinInterval && calculateTimeIndicatorPositionShift(cellElement.current, currentDate);
  });

  return (
    <Typography variant="overline" className={classes.cellWrapper} ref={cellElement}>
      <Box className={classes.cellContent}></Box>
      <Divider />
      {isToday(day) && isCurrentDateWithinInterval && <TimeIndicator positionShift={positionShift} />}
    </Typography>
  );
};

export default HourCell;
