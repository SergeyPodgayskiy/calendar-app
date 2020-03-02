import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import CalendarViewTypePicker from './header/CalendarViewTypePicker';
import MainMenuButton from './header/MainMenuButton';
import MainLogo from './header/MainLogo';
import TodayDateButton from './header/TodayDateButton';
import SelectedDatePeriodText from './header/SelectedDatePeriodText';
import PrevDatePeriodButton from './header/PrevDatePeriodButton';
import NextDatePeriodButton from './header/NextDatePeriodButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  composedMenuBox: {
    marginRight: theme.spacing(6),
    alignItems: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  console.log('classes', classes.appbar);

  return (
    <AppBar position="relative" color={'inherit'}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flex="1 0 auto" className={classes.composedMenuBox}>
          <MainMenuButton />
          <MainLogo />
        </Box>
        <Box display="flex" flex="1 1 100%">
          <Box display="flex" flex="1 0 auto">
            <TodayDateButton />
            <Box>
              <PrevDatePeriodButton />
              <NextDatePeriodButton />
            </Box>
            <SelectedDatePeriodText />
          </Box>
          <Box display="flex">
            <CalendarViewTypePicker />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
