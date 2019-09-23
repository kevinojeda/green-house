import React from 'react';


import SideBarMenu from './components/sideBarMenu';
import DropDownMenu from './components/dropDownMenu';
import SearchBar from './components/searchBar';
import Indicators from './components/indicator';
import Graphs from './components/graphs';
import Tables from './components/tables';
import Footer from './components/footer';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <div className="App">
      <div className="wrapper ">
        <SideBarMenu />
        <div className="main-panel">
          <SearchBar />
          <div className="content">
            <div className="container-fluid">
              <Indicators />
              <Graphs />
              <Tables />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="fixed-plugin">
        <DropDownMenu />
      </div>
    </div>
  );
}

export default App;
