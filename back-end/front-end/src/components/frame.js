import React, { Component } from 'react';
import SideBarMenu from './frame/sideBarMenu';
import SearchBar from './frame/searchBar';
import Indicators from './frame/indicator';
import Graphs from './frame/graphs';
import Tables from './frame/tables';
import Footer from './frame/footer';


import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Frame extends Component {
  render() {
    return (
      <div className="wrapper ">
        <SideBarMenu/>
        <div className="main-panel">
          <SearchBar/>
          <div className="content">
            <div className="container-fluid">
            <Router>
            <div className="App">
            <Route path="/mediciones"  render={()=>{return(<div><Indicators/><Graphs/><Tables/></div>)}}/>
            <Route path="/alarmas"  render={()=>{return(<div></div>)}}/>
            <Route path="/especificaciones"  render={()=>{return(<div></div>)}}/>
            <Route path="/cosechas"  render={()=>{return(<div></div>)}}/>
            <Route path="/usuarios"  render={()=>{return(<div></div>)}}/>
            <Route path="/about_us"  render={()=>{return(<div></div>)}}/>
            </div>
            </Router>
              
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
  
  export default Frame;