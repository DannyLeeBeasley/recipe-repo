import React from "react";
import { NavBarItems } from "./NavBarItems";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout")
    .then((res) => res.json())
    .then(() => {
      setUser(null);
      alert('You Have Been Logged Out');
      // history.push("/loggedout");
    });
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar-items">
        {NavBarItems.map((item, index) => {
          return (
            <span key={index}>
              <Link
                onClick={(e) => {
                  item.onClick(e, user);
                }}
                className={item.cName}
                to={item.url}
              >
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
