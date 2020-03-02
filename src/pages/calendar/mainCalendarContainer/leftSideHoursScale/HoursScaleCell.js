import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  scaleCellWrapper: {
    minHeight: '48px',
    textAlign: 'center',
    height: 'auto',
    paddingTop: '8px',
    paddingBottom: '8px',
    color: theme.palette.text.secondary,
  },
}));

// Ex; hour = 1, hourPeriod = AM
const HoursScaleCell = ({ hour, hourPeriod }) => {
  const classes = useStyles();

  return (
    <Typography variant="overline" display="block" className={classes.scaleCellWrapper}>
      {hour} {hourPeriod}
    </Typography>
  );
};

export default HoursScaleCell;
