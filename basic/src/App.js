import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About.js'
import Movies from './components/Movies.js'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:page" component={About} />
        <Route exact path="/movies/" component={Movies} />
        <Route exact path="/movies/:page" component={Movies} />
      </Switch>
    </Router>
  );
}




export default App;
