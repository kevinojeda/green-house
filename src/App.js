import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Fixedplugin from './components/fixedplugin';
import Frame from './components/frame';

function App() {
  return (
    <Router>
      <div className="App">
        <Frame/>
        <Fixedplugin/>  
      </div>
    </Router>
  );
}

export default App;
