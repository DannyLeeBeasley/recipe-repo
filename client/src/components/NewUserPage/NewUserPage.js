import React, { useState } from "react";
import './NewUserPage.css'

function NewUserPage() {
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
        password: password
      }),
    })
    .then((res) => res.json())
  };
  return (
    <div>
      <h1 className="new-user-head">New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewUserPage;