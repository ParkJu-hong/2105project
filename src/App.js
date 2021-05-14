import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Link to='/'/>
    <Switch>
      <Route exact path='/'><LandingPage /></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
