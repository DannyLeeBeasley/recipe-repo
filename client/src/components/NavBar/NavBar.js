import React, { Component } from "react";
import { NavBarItems } from "./NavBarItems";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./NavBar.css";

function NavBar({ user, setUser }) {
  const [clicked, setClicked] = useState(false);

  // function handleClick() {
  //   setClicked(!clicked);
  // }

  function handleLogout() {
    fetch("/logout")
    .then(() => setUser(null))
    // history.push("/loggedout");
  }

  return (
    <nav className="NavBarItems">
      <div>
        {NavBarItems.map((item, index) => {
          return (
            <span key={index}>
              <Link onClick={(e) => {
                item.onClick(e, user)
                }} className={item.cName} to={item.url}>
                {item.name}
              </Link>
            </span>
          );
        })}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </nav>
  );
}

export default NavBar;
