import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMarginLeftRightSpacing from '../../../components/hooks/useMarginLeftRightSpacing';
import dateViewTypes from '../../../utils/dateViewTypes';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  selectedDateText: {
    fontWeight: '400',
    ...useMarginLeftRightSpacing(theme, 2),
  },
}));

// Period Date Formats
const yearFormat = 'yyyy';
const monthYearFormat = 'MMMM yyyy';

// TODO: implement logic of transitive week (e.x: March - April)
const defineDatePeriodText = (date, viewType) => {
  switch (viewType) {
    case dateViewTypes.day: {
      return format(date, monthYearFormat);
    }
    case dateViewTypes.year: {
      return format(date, yearFormat);
    }
    default:
      return format(date, monthYearFormat);
  }
};

const SelectedDatePeriodText = () => {
  const classes = useStyles();
  const selectedViewType = useSelector(state => state.calendar.viewType);
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const datePeriodText = defineDatePeriodText(selectedDate, selectedViewType);

  return (
    <>
      <Typography variant="h6" className={classes.selectedDateText}>
        {datePeriodText}
      </Typography>
    </>
  );
};

export default SelectedDatePeriodText;
