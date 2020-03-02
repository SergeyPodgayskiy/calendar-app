import React from 'react';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { setPrevDatePeriod } from '../../../modules/calendar';

const useStyles = makeStyles(theme => ({
  previousDateViewButton: {
    marginLeft: theme.spacing(1),
  },
}));

const PrevDatePeriodButton = () => {
  const classes = useStyles();
  const viewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const dispatch = useDispatch();

  const handleSetPreviousDatePeriod = () => {
    setPrevDatePeriod(selectedDate, viewType)(dispatch);
  };

  return (
    <>
      <Tooltip title={`Previous ${viewType}`}>
        <IconButton
          aria-label={`Previous ${viewType}`}
          size="small"
          color="inherit"
          className={classes.previousDateViewButton}
          onClick={handleSetPreviousDatePeriod}
        >
          <NavigateBeforeRoundedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default PrevDatePeriodButton;
