import React from 'react';
import './App.css';
import Calendar from './pages/Calendar';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Calendar />
    </Provider>
  );
}

export default App;
