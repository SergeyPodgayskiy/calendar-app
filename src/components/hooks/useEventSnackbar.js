import React, { useMemo, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import eventActionsTypes from '../../utils/eventActionsTypes';
import withStyles from '@material-ui/core/styles/withStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box } from '@material-ui/core';

//Styles
const useStyles = makeStyles(theme => ({
  snackbarContent: {
    minWidth: 280,
  },
}));

// Constants
const DEFAULT_AUTOHIDE_DURATION = 3000000;
const DELETED_EVENT_AUTOHIDE_DURATION_SNACKBAR = 6000;
const SAVED_EVENT_AUTOHIDE_DURATION_SNACKBAR = DEFAULT_AUTOHIDE_DURATION;

// Default Options
const defaultSnackbarPositionOptions = { vertical: 'bottom', horizontal: 'left' };

// Component
const useEventSnackbar = (eventActionType, showSnackbar = false, positionOptions = defaultSnackbarPositionOptions) => {
  const classes = useStyles();
  const [show, setShow] = useState(showSnackbar);

  const handleCloseSnackbar = () => {
    setShow(false);
  };

  const eventsSnackbarsMap = useMemo(() => {
    return new Map([
      [
        eventActionsTypes.persist,
        {
          key: eventActionsTypes.persist,
          autoHideDuration: SAVED_EVENT_AUTOHIDE_DURATION_SNACKBAR,
          childComponent: (
            <Alert severity="success" onClose={handleCloseSnackbar}>
              Event Saved
            </Alert>
          ),
        },
      ],
      [
        eventActionsTypes.delete,
        {
          key: eventActionsTypes.delete,
          autoHideDuration: DELETED_EVENT_AUTOHIDE_DURATION_SNACKBAR,
          childComponent: (
            <Alert severity="info" onClose={handleCloseSnackbar}>
              Event Deleted
            </Alert>
          ),
        },
      ],
    ]);
  }, []);

  const eventSnackbarObj = eventsSnackbarsMap.get(eventActionType);

  let SnackbarComponent = null;
  if (eventSnackbarObj) {
    SnackbarComponent = ({ children }) => {
      return (
        <>
          {eventSnackbarObj && (
            <Snackbar
              key={eventSnackbarObj.key}
              anchorOrigin={positionOptions}
              open={show}
              autoHideDuration={eventSnackbarObj.autoHideDuration}
              onClose={handleCloseSnackbar}
            >
              <Box className={classes.snackbarContent}>{children ? children : eventSnackbarObj.childComponent}</Box>
            </Snackbar>
          )}
        </>
      );
    };
  }

  return [SnackbarComponent, show, setShow];
};

export default useEventSnackbar;
