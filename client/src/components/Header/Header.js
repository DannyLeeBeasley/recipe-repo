import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <span className="logo" role="img">
          &nbsp; 🧄 &nbsp; 🌶 &nbsp; 🧀 &nbsp; 🥕 &nbsp;
        </span>
        Recipe Repo
        <span className="logo" role="img">
          &nbsp; 🥩 &nbsp; 🧅 &nbsp; 🥦 &nbsp; 🍇 &nbsp;
        </span>
      </h1>
    </header>
  );
}

export default Header;
