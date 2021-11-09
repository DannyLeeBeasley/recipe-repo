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
      <h1 className="new-user-head">New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            className="new-user-input"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            className="new-user-input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <input
          className="submit-new-user-button"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </div>
  );
}

export default NewUserPage;
