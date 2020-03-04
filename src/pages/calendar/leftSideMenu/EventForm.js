import React from 'react';
import { FormGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMarginTopBottomSpacing from '../../../components/hooks/useMarginTopBottomSpacing';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import usePaddingTopBottomSpacing from '../../../components/hooks/usePaddingTopBottomSpacing';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  formControl: {
    padding: theme.spacing(1),
  },
}));

const EventForm = () => {
  const classes = useStyles();

  return (
    <form>
      <Paper>
        <FormGroup fullWidth className={classes.formControl}>
          <TextField label={'Add title'} />
          <FormGroup>
            <IconButton className={classes.iconButton} aria-label="start date">
              <MenuIcon />
            </IconButton>
          </FormGroup>
          {/*        <FormControlLabel control={} label={} />
        <FormControlLabel control={} label={} />
        <FormControlLabel control={} label={} />
        <FormControlLabel control={} label={} />
        <FormControlLabel control={} label={} />
        <FormControlLabel control={} label={} />*/}
        </FormGroup>
      </Paper>
    </form>
  );
};

export default EventForm;
