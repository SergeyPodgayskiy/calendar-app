import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles(theme => ({
  timeIndicator: {
    position: 'absolute',
    zIndex: '1000',
    pointerEvents: 'none',
    left: 0,
    right: 0,
  },
  line: {
    borderTop: 'red solid 2px',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: -4,
    left: -5,
  },
}));

const TimeIndicator = ({ positionShift }) => {
  const theme = useTheme();
  const classes = useStyles();
  console.log('positionShift', positionShift);

  return (
    <>
      {positionShift && (
        <Box className={classes.timeIndicator} style={{ bottom: theme.spacing(1) - positionShift }}>
          <Box className={classes.circle}></Box>
          <Box className={classes.line}></Box>
        </Box>
      )}
    </>
  );
};

export default TimeIndicator;
