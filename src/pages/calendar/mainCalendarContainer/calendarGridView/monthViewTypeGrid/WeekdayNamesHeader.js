import React from 'react';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { weekdayShortNames } from '../../../../../utils/calendarGridUtil';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  weekdayNamesHeader: {
    display: 'flex',
    marginBottom: theme.spacing(1),
  },
  weekdayCell: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#70757a',
    fontSize: 11,
    fontWeight: 500,
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
