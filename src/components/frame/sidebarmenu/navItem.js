import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavItem extends Component{

    render(){
        return (
        <li className={this.props.active}>
            <Link to={this.props.href} className="nav-link">
                <i className="material-icons">{this.props.icon}</i>
                <p>{this.props.name}</p>
            </Link>
        </li>
        );
    }
}
export default NavItem;