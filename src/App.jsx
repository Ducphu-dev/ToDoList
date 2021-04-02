import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import moment from "moment";


class App extends Component {
  


  render() {
    
    
    return (
      <Router>
        <Box padding="0 5em">
          <Header />
        </Box>
        <Box padding="0 5em">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Box>
      </Router>
    );
  }
}

export default App;
