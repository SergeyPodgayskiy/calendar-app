import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import usePaddingTopBottomSpacing from '../../components/hooks/usePaddingTopBottomSpacing';
import usePaddingLeftRightSpacing from '../../components/hooks/usePaddingLeftRightSpacing';
import CalendarGridView from './mainCalendarContainer/CalendarGridView';

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
    display: 'flex',
    flexDirection: 'column',
    ...usePaddingTopBottomSpacing(theme, 1),
  },
  mainWrapper: {
    display: 'flex',
    flex: '1 0 auto',
  },
  leftSideScaleWrapper: {
    ...usePaddingLeftRightSpacing(theme, 1),
    flexBasis: '40px',
  },
  calendarGridViewWrapper: {
    flex: '1 0 auto',
    ...usePaddingLeftRightSpacing(theme, 1),
  },
}));

const MainCalendarContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerWrapper}>
      <Paper className={classes.paperWrapper}>
        <Box className={classes.calendarGridViewWrapper}>
          <CalendarGridView />
        </Box>
      </Paper>
    </Box>
  );
};

export default MainCalendarContainer;
