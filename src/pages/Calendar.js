import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import LeftSideMenu from '../pages/calendar/LeftSideMenu';
import { makeStyles } from '@material-ui/core/styles';
import MainCalendarContainer from './calendar/MainCalendarContainer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Header from './calendar/Header';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import usePaddingTopBottomSpacing from '../components/hooks/usePaddingTopBottomSpacing';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from '../components/hooks/useInterval';
import { setCurrentDate } from '../modules/calendar';
import { UPDATE_CURRENT_DATE_DELAY } from '../config';
import { fetchEvents } from '../modules/events';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContainer from './SnackbarContainer';

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
  const [isShowErrorSnackbar, setIsShowErrorSnackbar] = useState(false);
  const error = useSelector(state => state.events.error);

  useInterval(() => {
    setCurrentDate(new Date())(dispatch);
  }, UPDATE_CURRENT_DATE_DELAY);

  useEffect(() => {
    fetchEvents()(dispatch)
      .then(events => {
        console.debug('loaded events', events);
      })
      .catch(error => {
        setIsShowErrorSnackbar(true);
        console.error(error);
      });
  }, []);

  const handleCloseSnackbar = () => {
    setIsShowErrorSnackbar(false);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {error && <Alert severity="error">{error.message}</Alert>}
      <Box className={classes.header}>
        <Header />
      </Box>
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
      <SnackbarContainer />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isShowErrorSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          We couldn't load your events. Please refresh the page.
        </Alert>
      </Snackbar>
    </MuiPickersUtilsProvider>
  );
};

export default Calendar;
