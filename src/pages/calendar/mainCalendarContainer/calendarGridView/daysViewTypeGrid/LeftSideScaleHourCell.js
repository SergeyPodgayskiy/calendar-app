import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Typography variant="overline" display="block" className={classes.scaleCellWrapper}>
      {hour}
    </Typography>
  );
};

export default LeftSideScaleHourCell;
