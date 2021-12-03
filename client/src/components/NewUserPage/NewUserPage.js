import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewUserPage.css";

function NewUserPage() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json());
    history.push("/signin");
  }
  return (
    <div className="new-user-container">
      <h1 className="new-user-head">New User?</h1>
      <p className="new-user-sub-title">
        Enter Username and Password Below To Create An Account
      </p>
      <form onSubmit={handleSubmit}>
        <div className="new-user-input-container">
          <label>USERNAME:</label>
          <input
            className="new-user-input"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="new-user-input-container">
          <label>PASSWORD:</label>
          <input
            className="new-user-input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <input
          className="submit-new-user-button"
          type="submit"
          value="Create New Account"
        ></input>
      </form>
    </div>
  );
}

export default NewUserPage;
