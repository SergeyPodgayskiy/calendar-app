import React from 'react';
import Box from '@material-ui/core/Box';
import LeftSideMenu from '../pages/calendar/LeftSideMenu';
import { makeStyles } from '@material-ui/core/styles';
import useMarginTopBottomSpacing from '../components/hooks/useMarginTopBottomSpacing';
import MainCalendarContainer from './calendar/MainCalendarContainer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Header from './calendar/Header';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    height: '93vh',
  },
  header: {
    height: '7vh',
  },
  leftSideMenu: {
    ...useMarginTopBottomSpacing(theme, 1),
    height: '100%',
  },
  mainCalendarContainer: {
    ...useMarginTopBottomSpacing(theme, 1),
    flex: '1 0 auto',
    height: '100%',
  },
}));

const Calendar = () => {
  const classes = useStyles();

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
