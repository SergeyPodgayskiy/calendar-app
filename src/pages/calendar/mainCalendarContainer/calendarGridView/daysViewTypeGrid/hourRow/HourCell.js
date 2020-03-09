import React, { createRef, useEffect, useRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import usePaddingTopBottomSpacing from '../../../../../../components/hooks/usePaddingTopBottomSpacing';
import Divider from '@material-ui/core/Divider';
import usePaddingLeftRightSpacing from '../../../../../../components/hooks/usePaddingLeftRightSpacing';
import { useSelector } from 'react-redux';
import TimeIndicator from './hourCell/TimeIndicator';
import { isToday, set } from 'date-fns';

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

// Ex; hour = 1, hourPeriod = AM, day = Date()
const HourCell = ({ hour, period, day }) => {
  const classes = useStyles();
  // const cellDate =
  const currentDate = useSelector(state => state.calendar.currentDate);
  const cellElement = useRef();
  let timeIndicatorPosition;

  useEffect(() => {}, [currentDate]);

  const calcTimeIndicatorPosition = () => {};

  return (
    <Typography variant="overline" className={classes.cellWrapper} ref={cellElement}>
      <Box className={classes.cellContent}>{day.toString()}</Box>
      <Divider />
      {isToday(day) && <TimeIndicator />}
    </Typography>
  );
};

export default HourCell;
