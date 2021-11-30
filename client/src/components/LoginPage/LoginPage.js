import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setUser, user }) {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    let API_PATH;
    login ? (API_PATH = "sessions") : (API_PATH = "users");
    fetch(`/${API_PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          setErrors(json.error);
          alert("Incorrect Username Or Password");
        } else {
          setUser(json);
          history.push("/");
        }
      });
  }

  return (
    <div className="login-container">
      <h1 className="login-head">Welcome Back!</h1>
      <p className="login-sub-title">Log In Below</p>
      <form onSubmit={onSubmit}>
        <div className="login-input-container">
          <label>USERNAME:</label>
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="login-input-container">
          <label>PASSWORD:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input
          className="login-button"
          type="submit"
          value="Log In"
          onClick={() => setLogin(true)}
        ></input>
      </form>
      <p className="new-user-link">
        New User?{" "}
        <Link className="link-to-new-user" to="/signup">
          Click Here
        </Link>{" "}
        To Sign Up!
      </p>
    </div>
  );
}

export default LoginPage;
