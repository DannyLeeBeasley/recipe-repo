import React from "react";
import { useHistory } from "react-router";
import "LogOutPage.css";

function LogOutPage(){
    let history = useHistory();

    function pushToRecipes(){
        history.push("/")
    }

    return(
        <div>
            <p className="logged-out-message">You Have Been Logged Out. Thanks For Visiting Recipe Repo!</p>
            <button className="return-to-homepage-button" onClick={pushToRecipes}>Return To Recipes Homepage</button>
        </div>
    );
}