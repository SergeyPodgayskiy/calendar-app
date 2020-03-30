import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import DialogCloseButton from '../DialogCloseButton';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    padding: '8px 6px 0 6px',
    justifyContent: 'flex-end',
  },
  eventActions: {
    display: 'flex',
  },
  actionButton: {
    padding: '0 4px',
  },
  dialogCloseButton: {
    padding: 0,
    position: 'static',
    marginLeft: 16,
  },
}));

const EventInfoCardHeader = ({ event, handleCloseCard }) => {
  const classes = useStyles();

  //TODO: implement actions (edit, delete)

  return (
    <Box className={classes.header}>
      <Box className={classes.eventActions}>
        <Box className={classes.actionButton}>
          <IconButton aria-label={'edit-event'} size={'small'}>
            <EditOutlinedIcon />
          </IconButton>
        </Box>
        <Box className={classes.actionButton}>
          <IconButton aria-label={'delete-event'} size={'small'}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogCloseButton handleClose={handleCloseCard} className={classes.dialogCloseButton} />
    </Box>
  );
};

export default EventInfoCardHeader;
