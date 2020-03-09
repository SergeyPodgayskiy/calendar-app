import React, { useEffect, useState } from 'react';
import { FormGroup } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { addHours, isBefore } from 'date-fns';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useMarginTopBottomSpacing from '../../../components/hooks/useMarginTopBottomSpacing';
import AddIcon from '@material-ui/icons/Add';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import withStyles from '@material-ui/core/styles/withStyles';
import { toggleEventForm, persistEvent } from '../../../modules/events';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

// Panel Styles Overriding
const ExpansionPanel = withStyles({
  root: {
    borderRadius: 4,
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    borderRadius: 4,
    fontSize: '0.9375rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    minHeight: 42,
    '&$expanded': {
      minHeight: 42,
      borderRadius: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'block',
  },
}))(MuiExpansionPanelDetails);

// General Styles
const useStyles = makeStyles(theme => ({
  formControl: {
    padding: theme.spacing(1),
  },
  formLine: {
    ...useMarginTopBottomSpacing(theme, 1),
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  saveButton: {
    marginLeft: theme.spacing(1),
  },
}));

// Constants
const DEFAULT_EVENT_HOURS_DIFFERENCE = 1;
const TITLE = 'title';
const START_DATE = 'startDate';
const END_DATE = 'endDate';
const DESCRIPTION = 'description';

// Component
const EventForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentSelectedDate = useSelector(state => state.calendar.selectedDate);
  const endEventDate = addHours(currentSelectedDate, DEFAULT_EVENT_HOURS_DIFFERENCE);
  const isExpandedForm = useSelector(state => state.events.isExpandedEventForm);
  const error = useSelector(state => state.events.error);

  // Form State
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(currentSelectedDate);
  const [endDate, setEndDate] = useState(endEventDate);
  const [description, setDescription] = useState('');
  const [validationErrors, setValidationErrors] = useState(null);
  const [isShowSnackbar, setIsShowSnackbar] = useState(false);
  const isValidForm = !validationErrors || Object.keys(validationErrors).length === 0;

  // Effects
  useEffect(() => {
    if (isExpandedForm) {
      handleStartDate(currentSelectedDate);
    }
  }, [currentSelectedDate, isExpandedForm]);

  useEffect(() => {
    const validationErrors = validateForm();
    if (validationErrors) {
      setValidationErrors(validationErrors);
    } else {
      setValidationErrors(null);
    }
  }, [endDate]);

  // Form Behavior
  const handleStartDate = startDate => {
    setStartDate(startDate);
    setEndDate(addHours(startDate, DEFAULT_EVENT_HOURS_DIFFERENCE));
  };

  const handleToggleEventForm = () => {
    toggleEventForm()(dispatch);
  };

  const handleSave = async () => {
    if (isValidForm) {
      const event = {
        title,
        startDate,
        endDate,
        description,
      };
      await persistEvent(event)(dispatch);
      handleToggleEventForm();
      resetForm();
      setIsShowSnackbar(true);
    }
  };

  const handleCancel = () => {
    handleToggleEventForm();
    resetForm();
  };

  const validateForm = () => {
    const newValidationErrors = {};
    if (isBefore(endDate, startDate)) {
      newValidationErrors[END_DATE] = 'End Date should be greater than Start Date';
    }
    const isValid = Object.keys(newValidationErrors).length === 0;
    return isValid ? null : newValidationErrors;
  };

  const resetForm = () => {
    setTitle('');
    setStartDate(currentSelectedDate);
    setEndDate(endEventDate);
    setDescription('');
    setValidationErrors([]);
  };

  const handleCloseSnackbar = () => {
    setIsShowSnackbar(false);
  };

  return (
    <>
      <ExpansionPanel expanded={isExpandedForm} onChange={handleToggleEventForm}>
        <ExpansionPanelSummary expandIcon={<AddIcon style={{ color: 'white' }} />} aria-controls={'panel-form'}>
          EVENT
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSave();
            }}
          >
            <FormGroup className={classes.formControl}>
              <TextField
                name={TITLE}
                label="Title"
                className={classes.formLine}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <DateTimePicker
                name={START_DATE}
                disablePast
                variant="inline"
                label="Start"
                className={classes.formLine}
                value={startDate}
                onChange={handleStartDate}
              />
              <DateTimePicker
                name={END_DATE}
                disablePast
                variant="inline"
                label="End"
                className={classes.formLine}
                value={endDate}
                onChange={setEndDate}
                error={!isValidForm && Boolean(validationErrors[END_DATE])}
                helperText={!isValidForm && validationErrors[END_DATE]}
              />
              <TextField
                name={DESCRIPTION}
                label="Description"
                multiline
                className={classes.formLine}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Box className={`${classes.formLine} ${classes.buttons}`}>
                <Button variant={'outlined'} color="secondary" size={'small'} onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size={'small'}
                  className={classes.saveButton}
                  type={'submit'}
                  disabled={!isValidForm}
                >
                  Save
                </Button>
              </Box>
            </FormGroup>
          </form>
        </ExpansionPanelDetails>
        {error && <Alert severity="error">${error}</Alert>}
      </ExpansionPanel>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isShowSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          The event has been created
        </Alert>
      </Snackbar>
    </>
  );
};

export default EventForm;
