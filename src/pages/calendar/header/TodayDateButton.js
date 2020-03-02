import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import useMarginLeftRightSpacing from '../../../components/hooks/useMarginLeftRightSpacing';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate } from '../../../modules/calendar';
import { format } from 'date-fns/esm';

const useStyles = makeStyles(theme => ({
  todayButton: {
    border: '1px solid #dadce0',
    textTransform: 'none',
    ...useMarginLeftRightSpacing(theme, 2),
  },
}));

// Ex Result: Sunday, March 1
const tooltipDateFormat = 'iiii, MMMM d';

const TodayDateButton = () => {
  const classes = useStyles();
  const currentDate = useSelector(state => state.calendar.currentDate);
  const formattedDate = format(currentDate, tooltipDateFormat);
  const dispatch = useDispatch();

  const handleSetTodayDate = () => {
    setSelectedDate(currentDate)(dispatch);
  };

  return (
    <>
      <Tooltip title={formattedDate} aria-label={`Today: ${formattedDate}`}>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={classes.todayButton}
          onClick={handleSetTodayDate}
        >
          Today
        </Button>
      </Tooltip>
    </>
  );
};

export default TodayDateButton;
