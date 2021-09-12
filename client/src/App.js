import "./App.css";
import React, { useState } from "react";
import { Route, Router, Switch, useHistory } from "react-router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RecipesPage from "./components/RecipesPage";

function App() {
  // const [user, setUser] = useState(null);

  // const history = useHistory();
  // if(!user)history.push('/sign_up')

  return (
    <div className="App">
        <RecipesPage />
    </div>
  );
}

export default App;
