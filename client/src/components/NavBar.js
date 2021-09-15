import React, { Component } from "react";
import { NavBarItems } from "./NavBarItems";
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { useState } from "react/cjs/react.development";

function NavBar( {user, setUser} ){

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    function handleLogout(){
        fetch('/logout')
        .then(() => setUser(null))
      }
      
      return(
        <nav className= "NavBarItems">
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
            <button onClick={handleLogout}>{user ? 'Logout' :null}</button>
        </nav>
    );
}


export default NavBar;