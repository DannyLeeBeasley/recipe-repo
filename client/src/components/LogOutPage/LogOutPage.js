import React from "react";
import { useHistory } from "react-router";
import "./LogOutPage.css";

function LogOutPage() {
  let history = useHistory();

  function pushToRecipes() {
    history.push("/");
  }

  return (
    <div>
      <p className="logged-out-message">
        You've Been Logged Out. Thanks For Coming!
      </p>
      <button className="return-to-homepage-button" onClick={pushToRecipes}>
        Return To Recipes Homepage
      </button>
    </div>
  );
}

export default LogOutPage;
