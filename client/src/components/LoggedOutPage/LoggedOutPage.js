import React from "react";
import { useHistory } from "react-router";
import "./LoggedOutPage.css";

function LoggedOutPage() {
  let history = useHistory();

  function pushToRecipes() {
    history.push("/");
  }

  return (
    <div className="logged-out-page-container">
      <p className="logged-out-page-text">
        You've Been Logged Out.
      </p>
      <p className="logged-out-page-text">
        Thanks So Much For Coming!
      </p>
      <button className="return-to-homepage-button" onClick={pushToRecipes}>
        Return To Recipe Repo Homepage
      </button>
    </div>
  );
}

export default LoggedOutPage;
