import React from 'react';
import { Box } from '@material-ui/core';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import DialogCloseButton from '../../../../../../../../../components/DialogCloseButton';
import DayHeaderCell from '../../../../../../../../../components/DayHeaderCell';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    paddingTop: 8,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
}));

const EventsListCardHeader = ({ date, handleCloseCard }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.headerContent}>
        <DayHeaderCell day={date} dayNumberFontSize={'1.5rem'} />
      </Box>
      <DialogCloseButton handleClose={handleCloseCard} />
    </Box>
  );
};

export default EventsListCardHeader;
