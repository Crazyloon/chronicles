import React, { useState, useEffect } from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";

import logo from './logo.svg';

import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';

import './App.scss';

const history = createBrowserHistory();

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
