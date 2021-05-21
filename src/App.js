import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'
import LandingPage from './components/LandingPage'



function App() {
  const [mode, setMode] = useState('home');

  return (
    <>
    <LandingPage onChangeMode={function(_mode){
      setMode(_mode);
    }.bind(this)}/>
    </>
  );
}

export default App;
