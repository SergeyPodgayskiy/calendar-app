import React from 'react';
import Box from '@material-ui/core/Box';
import LeftSideMenu from '../pages/calendar/LeftSideMenu';
import { makeStyles } from '@material-ui/core/styles';
import MainCalendarContainer from './calendar/MainCalendarContainer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Header from './calendar/Header';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import usePaddingTopBottomSpacing from '../components/hooks/usePaddingTopBottomSpacing';
import { useSelector, useDispatch } from 'react-redux';
import useInterval from '../components/hooks/useInterval';
import { setCurrentDate } from '../modules/calendar';
import { UPDATE_CURRENT_DATE_DELAY } from '../config';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
  },
  leftSideMenu: {
    ...usePaddingTopBottomSpacing(theme, 1),
    height: '100%',
  },
  mainCalendarContainer: {
    ...usePaddingTopBottomSpacing(theme, 1),
    flexGrow: '1',
    height: '100%',
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useInterval(() => {
    setCurrentDate(new Date())(dispatch);
  }, UPDATE_CURRENT_DATE_DELAY);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Header />
      <Container maxWidth={'xl'} className={classes.container}>
        <Box display="flex" height="100%">
          <Box className={classes.leftSideMenu}>
            <LeftSideMenu />
          </Box>
          <Box className={classes.mainCalendarContainer}>
            <MainCalendarContainer />
          </Box>
        </Box>
      </Container>
    </MuiPickersUtilsProvider>
  );
};

export default Calendar;
