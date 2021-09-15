import React, { Component } from "react";
import { NavBarItems } from "./NavBarItems";
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
            <ul>
                {NavBarItems.map((item, index) => {
                    return (
                        <li key={index}><Link className={item.cName} to={item.url}>
                            {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <button className="logout-button" onClick={handleLogout}>{user ? 'Logout' :null}</button>
        </nav>
    );
}


export default NavBar;