import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage'


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Sidebar/> */}
    <Switch>
      <Route exact path='/'><LandingPage noticeboard='home'/></Route>
      <Route path='/meditation'><LandingPage noticeboard='meditation'/></Route>
      <Route path='/'><LandingPage noticeboard='workout'/></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
