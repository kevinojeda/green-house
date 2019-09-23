import React from 'react';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import All from './components/all';
import Fixedplugin from './components/fixedplugin/fixedplugin';

function App() {
  return (
    <div className="App">
      <All/>
      <Fixedplugin/>  
    </div>
  );
}

export default App;
