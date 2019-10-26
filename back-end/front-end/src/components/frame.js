import React, { Component } from 'react';
import SideBarMenu from './frame/sideBarMenu';
import SearchBar from './frame/searchBar';
import Indicators from './frame/indicator';
import Graphs from './frame/graphs';
import Footer from './frame/footer';


import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TablaAlarma from './frame/content/tables/TablaAlarma';
import TablaEspecificaciones from './frame/content/tables/TablaEspecificaciones';
import TablaUsuarios from './frame/content/tables/TablaUsuarios';
import TablaCosecha from './frame/content/tables/TablaCosecha';

import FormCosecha from './frame/content/forms/FromCosecha';
import FormEspecificaciones from './frame/content/forms/FormEspecificaciones';
import FormUsuario from './frame/content/forms/FormUsuario';

 

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
            <Route exact path="/"  render={()=>{return(<div><Indicators/><Graphs/></div>)}}/>

            <Route exact path="/mediciones"  render={()=>{return(<div><Indicators/><Graphs/></div>)}}/>

            <Route exact path="/alarmas"  render={()=>{return(<div><TablaAlarma/></div>)}}/>

            <Route exact path="/especificaciones"  render={()=>{return(<div><TablaEspecificaciones/></div>)}}/>
            <Route exact path="/especificaciones/form"  render={()=>{return(<div><FormEspecificaciones/></div>)}}/>

            <Route exact path="/cosechas"  render={(props)=>{return(<div><TablaCosecha {...props}/></div>)}}/>
            <Route exact path="/cosechas/form"  render={(props)=>{return(<div><FormCosecha {...props}/></div>)}}/>
            <Route exact path="/cosechas/form/:id"  render={(props)=>{return(<div><FormCosecha {...props}/></div>)}}/>

            <Route exact path="/usuarios"  render={(props)=>{return(<div><TablaUsuarios {...props}/></div>)}}/>
            <Route exact path="/usuarios/form"  render={(props)=>{return(<div><FormUsuario {...props}/></div>)}}/>
            <Route exact path="/usuarios/form/:id"  render={(props)=>{return(<div><FormUsuario {...props}/></div>)}}/>

            <Route exact path="/about_us"  render={()=>{return(<div></div>)}}/>
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