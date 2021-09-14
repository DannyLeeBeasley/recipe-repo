import React, { Component } from "react";
import { NavBarItems } from "./NavBarItems";
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import "./NavBar.css";

class NavBar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
        <nav className= "NavBarItems">
            <h1 className="navbar-logo"></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
                {NavBarItems.map((item, index) => {
                    return (
                        <li key={index}><Link className={item.cName} to={item.url}>
                            {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
}

export default NavBar;