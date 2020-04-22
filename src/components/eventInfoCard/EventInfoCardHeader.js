import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import DialogCloseButton from '../DialogCloseButton';
import { deleteEvent } from '../../modules/events';

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
  const dispatch = useDispatch();

  const handleDeleteEvent = async event => {
    const deletedId = await deleteEvent(event.id)(dispatch);
  };

  const handleEditEvent = event => {};

  return (
    <Box className={classes.header}>
      <Box className={classes.eventActions}>
        <Box className={classes.actionButton}>
          <IconButton aria-label={'edit-event'} size={'small'} onClick={() => handleEditEvent(event)}>
            <EditOutlinedIcon />
          </IconButton>
        </Box>
        <Box className={classes.actionButton}>
          <IconButton aria-label={'delete-event'} size={'small'} onClick={() => handleDeleteEvent(event)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogCloseButton handleClose={handleCloseCard} className={classes.dialogCloseButton} />
    </Box>
  );
};

export default EventInfoCardHeader;
