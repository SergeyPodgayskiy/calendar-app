import React from 'react';
import { Box, Paper } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useSelector } from 'react-redux';
import MiniCalendar from '../../leftSideMenu/MiniCalendar';
import usePaddingLeftRightSpacing from '../../../../components/hooks/usePaddingLeftRightSpacing';

const useStyles = makeStyles(theme => ({
  yearViewGridWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  miniCalendarWrapper: {
    ...usePaddingLeftRightSpacing(theme, 1),
    paddingBottom: theme.spacing(1),
  },
}));

const YearViewTypeGrid = () => {
  const classes = useStyles();
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  return (
    <Box className={classes.yearViewGridWrapper}>
      <Box className={classes.miniCalendarWrapper}>
        <MiniCalendar />
      </Box>
    </Box>
  );
};

export default YearViewTypeGrid;
