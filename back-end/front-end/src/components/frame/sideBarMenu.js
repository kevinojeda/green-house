import React, { Component } from "react";
import NavItem from "./sidebarmenu/navItem";

class SideBarMenu extends Component {
  state = {
    active: ["","","","","",""]

  }
  render() {
    return (
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <a className="simple-text logo-normal">GREEN HOUSE</a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <NavItem active={"nav-item "+this.state.active[0]} href="/mediciones" icon="eco" name="Mediciones"/>
            <NavItem active={"nav-item "+this.state.active[1]} href="/alarmas" icon="alarmas" name="Alarmas"/>
            <NavItem active={"nav-item "+this.state.active[2]} href="/especificaciones" icon="build" name="Especificaciones"/>
            <NavItem active={"nav-item "+this.state.active[3]} href="/cosechas" icon="local_florist" name="Cosechas"/>
            <NavItem active={"nav-item "+this.state.active[4]} href="/usuarios" icon="person" name="Usuarios"/>
            <NavItem active={"nav-item "+this.state.active[5]} href="/about_us" icon="language" name="About Us"/>
          </ul>
        </div>
      </div>
    );
  }
}
export default SideBarMenu;
