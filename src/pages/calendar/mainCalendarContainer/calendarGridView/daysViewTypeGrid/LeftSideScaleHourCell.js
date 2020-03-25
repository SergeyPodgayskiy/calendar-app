import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { convertHourFormat24To12 } from '../../../../../utils/calendarGridUtil';

const useStyles = makeStyles(theme => ({
  scaleCellWrapper: {
    width: '48px',
    minHeight: '48px',
    textAlign: 'center',
    height: 'auto',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    lineHeight: 'initial',
    fontSize: '0.7rem',
    flexShrink: '0',
  },
}));

const LeftSideScaleHourCell = ({ hour }) => {
  const classes = useStyles();
  const { convertedHour, period } = convertHourFormat24To12(hour);

  return (
    <Typography variant="overline" display="block" className={classes.scaleCellWrapper}>
      {convertedHour} {period}
    </Typography>
  );
};

export default LeftSideScaleHourCell;
