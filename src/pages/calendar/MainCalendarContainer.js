import React from 'react';
import { Box } from '@material-ui/core';
import CalendarGridHeader from './mainCalendarContainer/CalendarGridHeader';
import LeftSideHoursScale from './mainCalendarContainer/LeftSideHoursScale';
import CalendarGrid from './mainCalendarContainer/CalendarGrid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import usePaddingTopBottomSpacing from '../../components/hooks/usePaddingTopBottomSpacing';
import usePaddingLeftRightSpacing from '../../components/hooks/usePaddingLeftRightSpacing';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  containerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  paperWrapper: {
    height: '100%',
  },
  calendarHeaderWrapper: {
    ...usePaddingTopBottomSpacing(theme, 1),
  },
  mainWrapper: {
    display: 'flex',
    flex: '1 0 auto',
    ...usePaddingTopBottomSpacing(theme, 1),
  },
  leftSideScaleWrapper: {
    ...usePaddingLeftRightSpacing(theme, 1),
  },
  calendarGridViewWrapper: {
    flex: '1 0 auto',
  },
}));

const MainCalendarContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerWrapper}>
      <Paper className={classes.paperWrapper}>
        <Box className={classes.calendarHeaderWrapper}>
          <CalendarGridHeader />
        </Box>
        <Box className={classes.mainWrapper}>
          <Box>
            <LeftSideHoursScale />
          </Box>
          <Box className={classes.calendarGridViewWrapper}>
            <CalendarGrid />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default MainCalendarContainer;
