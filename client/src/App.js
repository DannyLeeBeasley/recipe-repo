import "./App.css";
import React, { useState } from "react";
import RecipesPage from "./components/RecipesPage/RecipesPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userSessions")) || null);

  return (
    <div className="App">
      <RecipesPage user={user} setUser={setUser} />
    </div>
  );
}

export default App;
