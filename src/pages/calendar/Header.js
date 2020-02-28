import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import CalendarViewTypePicker from './header/CalendarViewTypePicker';
import MainMenuButton from './header/MainMenuButton';
import MainLogo from './header/MainLogo';
import TodayDateButton from './header/TodayDateButton';
import SelectedDateOfViewType from './header/SelectedDateOfViewType';
import PrevDateOfViewTypeButton from './header/PrevDateOfViewTypeButton';
import NextDateOfViewTypeButton from './header/NextDateOfViewTypeButton';

const Header = () => {
  return (
    <AppBar color="transparent" position="relative">
      <Toolbar style={{ paddingTop: '8px', paddingBottom: '8px', justifyContent: 'space-between' }}>
        <Box display="flex" flex="1 0 auto" alignItems="center" style={{ paddingRight: '30px' }}>
          <MainMenuButton />
          <MainLogo />
        </Box>
        <Box display="flex" flex="1 1 100%">
          <Box display="flex" flex="1 0 auto">
            <TodayDateButton />
            <Box>
              <PrevDateOfViewTypeButton />
              <NextDateOfViewTypeButton />
            </Box>
            <SelectedDateOfViewType />
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
