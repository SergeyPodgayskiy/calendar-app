import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useMarginTopBottomSpacing from '../../hooks/useMarginTopBottomSpacing';

const useStyles = makeStyles(theme => ({
  createEventButton: {
    ...useMarginTopBottomSpacing(theme, 1),
  },
}));

const CreateEventButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant={'contained'}
      size={'large'}
      color={'primary'}
      className={classes.createEventButton}
      startIcon={<AddIcon />}
    >
      Create
    </Button>
  );
};

export default CreateEventButton;
