import React from 'react';
import { Router, Switch } from 'react-router';
import { createBrowserHistory } from "history";

import logo from './logo.svg';
import './App.scss';


import Navigation from './components/navigation/navigation';
import HomePage from './pages/home';

const history = createBrowserHistory();

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
          <HomePage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
