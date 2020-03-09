import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  timeIndicator: {
    position: 'absolute',
    zIndex: '1000',
    pointerEvents: 'none',
    borderTop: 'red solid 2px',
    left: 0,
    right: 0,
  },
}));

const TimeIndicator = ({ topPosition }) => {
  const classes = useStyles();

  return <Box className={classes.timeIndicator} style={{ topPosition }}></Box>;
};

export default TimeIndicator;
