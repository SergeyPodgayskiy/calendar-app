import React from 'react';
import './App.css';
import Calendar from './pages/Calendar';
import { CssBaseline, Box } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  fullHeightWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Box className={classes.fullHeightWrapper}>
        <Calendar />
      </Box>
    </Provider>
  );
}

export default App;
