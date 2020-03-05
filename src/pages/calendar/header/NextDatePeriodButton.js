import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { setNextDatePeriod } from '../../../modules/calendar';

const useStyles = makeStyles(theme => ({
  nextDateViewButton: {
    marginRight: theme.spacing(1),
  },
}));

const NextDatePeriodButton = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const dispatch = useDispatch();

  const handleSetNextDatePeriod = () => {
    setNextDatePeriod(selectedDate, viewType)(dispatch);
  };

  return (
    <>
      <Tooltip title={`Next ${viewType}`}>
        <IconButton
          aria-label={`Next ${viewType}`}
          size="small"
          color="inherit"
          className={classes.nextDateViewButton}
          onClick={handleSetNextDatePeriod}
        >
          <NavigateNextRoundedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default NextDatePeriodButton;
