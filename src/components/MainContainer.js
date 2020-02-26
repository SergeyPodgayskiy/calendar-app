import React from 'react';
import Box from '@material-ui/core/Box';
import LeftSideMenu from './mainContainer/LeftSideMenu';
import MainCalendarView from './mainContainer/MainCalendarView';
import { makeStyles } from '@material-ui/core/styles';
import useMarginTopBottomSpacing from './hooks/useMarginTopBottomSpacing';

const useStyles = makeStyles(theme => ({
  leftSideMenuWrapper: {
    ...useMarginTopBottomSpacing(theme, 1),
  },
  mainCalendarViewWrapper: {
    ...useMarginTopBottomSpacing(theme, 1),
  },
}));

const MainContainer = () => {
  const classes = useStyles();

  return (
    <Box display="flex" height="100%">
      <Box className={classes.leftSideMenuWrapper}>
        <LeftSideMenu />
      </Box>
      <Box className={classes.mainCalendarViewWrapper}>
        <MainCalendarView />
      </Box>
    </Box>
  );
};

export default MainContainer;
