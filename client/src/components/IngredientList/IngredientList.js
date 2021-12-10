import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IngredientCard from "../IngredientCard/IngredientCard";
import SearchIngredients from "../SearchIngredients/SearchIngredients";
import "./IngredientList.css";

function IngredientList({
  ingredients,
  deleteIngredient,
  user,
  usersLoaded,
  ingredientsLoaded,
}) {
  let history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const ingredientsToDisplay = ingredients.filter((ingredient) => {
    return ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleClick() {
    history.push("/newingredient");
  }

  if (!usersLoaded || !ingredientsLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="ingredients-page-head-and-search-container">
        {user ? (
          <>
            <h2 className="ingredient-list-header">
              These are the ingredients currently supported by Recipe Repo.
            </h2>
            <h2 className="ingredient-list-header2">
              Click the button below to add a new ingredient to our database!
            </h2>
          </>
        ) : (
          <>
            <h2 className="ingredient-list-header">
              These are the ingredients currently supported by Recipe Repo.
            </h2>
            <h2 className="ingredient-list-header2">
              Create an Account or Log In to add ingredients and recipes to our
              database!
            </h2>
          </>
        )}
        {user && (
          <button className="add-new-ingredient-button" onClick={handleClick}>
            Add New Ingredient
          </button>
        )}
        <SearchIngredients
          className="ingredient-search"
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
      <div className="ingredients-list">
        <main className="ingredient-list">
          {ingredientsToDisplay.map((ingredient) => {
            return (
              <IngredientCard
                key={ingredient.id}
                name={ingredient.name}
                image={ingredient.image}
                description={ingredient.description}
                deleteIngredient={deleteIngredient}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default IngredientList;
