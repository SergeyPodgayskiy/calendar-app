import React from 'react';
import './App.css';
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header";

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
    }
}));

function App() {
  const classes = useStyles();
    return (
      <>
      <CssBaseline/>
          <Header/>
          <Container maxWidth={"lg"} className={classes.container}>
            hello
          </Container>
      </>
  );
}

export default App;
