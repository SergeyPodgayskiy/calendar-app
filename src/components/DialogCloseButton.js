import React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: '4px 4px 0 0',
    right: 0,
    top: 0,
    position: 'absolute',
  },
}));

const DialogCloseButton = ({ size = 'small', className, handleClose }) => {
  const defaultClasses = useStyles();

  return (
    <Box className={className ? className : defaultClasses.iconButton}>
      <IconButton aria-label="close" size={size} onClick={handleClose}>
        <CloseRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default DialogCloseButton;
