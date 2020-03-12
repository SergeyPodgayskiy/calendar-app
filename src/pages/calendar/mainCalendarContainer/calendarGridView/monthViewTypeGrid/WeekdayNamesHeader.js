import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { weekdayShortNames } from '../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  weekdayNamesHeader: {
    display: 'flex',
  },
  weekdayCell: {
    flexGrow: 1,
  },
}));

const WeekdayNamesHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.weekdayNamesHeader}>
      {weekdayShortNames.map(weekdayName => {
        return <Box className={classes.weekdayCell}>{weekdayName}</Box>;
      })}
    </Box>
  );
};

export default WeekdayNamesHeader;
