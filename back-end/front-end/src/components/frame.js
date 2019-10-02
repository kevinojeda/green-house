import React, { Component } from 'react';
import SideBarMenu from './frame/sideBarMenu';
import SearchBar from './frame/searchBar';
import Indicators from './frame/indicator';
import Graphs from './frame/graphs';
import Tables from './frame/tables';
import Footer from './frame/footer';


import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TablaUsuarios from './frame/content/TablaUsuarios';
import TablaCosecha from './frame/content/TablaCosecha';
import TablaEspecificaciones from './frame/content/TablaEspecificaciones';
import TablaAlarma from './frame/content/TablaAlarma';
class Frame extends Component {
  render() {
    return (
      <div className="wrapper ">
        <SideBarMenu/>
        <div className="main-panel">
          <SearchBar/>
          <div className="content">
            <div className="container-fluid">
            
            <div className="App">
            <Route exact path="/"  render={()=>{return(<div><Indicators/><Graphs/><Tables/></div>)}}/>
            <Route path="/mediciones"  render={()=>{return(<div><Indicators/><Graphs/><Tables/></div>)}}/>
            <Route path="/alarmas"  render={()=>{return(<div><TablaAlarma/></div>)}}/>
            <Route path="/especificaciones"  render={()=>{return(<div><TablaEspecificaciones/></div>)}}/>
            <Route path="/cosechas"  render={()=>{return(<div><TablaCosecha/></div>)}}/>
            <Route path="/usuarios"  render={()=>{return(<div><TablaUsuarios/></div>)}}/>
            <Route path="/about_us"  render={()=>{return(<div></div>)}}/>
            </div>
              
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
  
  export default Frame;