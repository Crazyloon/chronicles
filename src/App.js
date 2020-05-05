import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from "history";

import './App.scss';


import Navigation from './components/navigation/navigation';
import HomePage from './pages/home';
import NotFoundPage from './pages/notfoundpage';
import Footer from './components/footer/footer';
import { HorizontalBorder } from './components/border/border';

const history = createBrowserHistory();

const navigationPages = [
  {
    location: '/cooking',
    name: 'Cooking'
  },
  {
    location: '/travel',
    name: 'Travel'
  },
  {
    location: '/fitness',
    name: 'Fitness'
  },
]

function App() {

  return (
    <>
      <Router history={history}>
        <Navigation pages={navigationPages} />
        <HorizontalBorder />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cooking" component={HomePage} />
          <Route exact path="/travel" component={HomePage} />
          <Route exact path="/fitness" component={HomePage} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </Router>
      <HorizontalBorder classList={['mt-4']} />
      <Footer />
    </>
  );
}

export default App;
