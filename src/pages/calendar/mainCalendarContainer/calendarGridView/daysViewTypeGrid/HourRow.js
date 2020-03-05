import React from 'react';
import { Box } from '@material-ui/core';
import LeftSideScaleHourCell from './LeftSideScaleHourCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HourCell from './hourRow/HourCell';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  hourRowWrapper: {
    display: 'flex',
  },
}));

const HourRow = ({ hour, period, days }) => {
  const classes = useStyles();

  return (
    <Box className={classes.hourRowWrapper}>
      <LeftSideScaleHourCell hour={hour} hourPeriod={period} />
      {days &&
        days.map((day, index) => {
          return (
            <Box display={'flex'} flexGrow={'1'} key={`${day}${index}`}>
              <HourCell hour={hour} period={period} day={day} />
              {index !== days.length - 1 && <Divider orientation={'vertical'} flexItem />}
            </Box>
          );
        })}
    </Box>
  );
};

export default HourRow;
