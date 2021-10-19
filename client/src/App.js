import "./App.css";
import React, { useState } from "react";
import { Route, Router, Switch, useHistory } from "react-router";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import RecipesPage from "./components/RecipesPage/RecipesPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
        <RecipesPage user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
