import React from "react";

function NavItem(props){
    return(
        <li className={props.active}>
            <a className="nav-link" href={props.href}>
                <i className="material-icons">{props.icon}</i>
                <p>{props.name}</p>
            </a>
        </li>
    )
}

  export default NavItem;