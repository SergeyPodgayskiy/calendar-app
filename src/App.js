import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MainContainer from './components/MainContainer';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <Header style={{ height: '7vh' }} />
        <Container maxWidth={'xl'} className={classes.container} style={{ height: '93vh' }}>
          <MainContainer />
        </Container>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
