import React from "react";
import { useHistory } from "react-router-dom";
import IngredientCard from "../IngredientCard/IngredientCard";
import "./IngredientList.css";

function IngredientList({ ingredients, handleDeleteIngredient, user }) {
  let history = useHistory();

  function handleClick() {
    history.push("/newingredient");
  }

  return (
    <>
      {user ? (
        <>
        <h2 className="ingredient-list-header">
          These are the ingredients currently supposrted by Recipe Repo.
        </h2>
        <h2 className="ingredient-list-header">Click the button below to add a new ingredient to our database!</h2>
        </>
      ) : (
        <>
        <h2 className="ingredient-list-header">
          These are the ingredients currently supposrted by Recipe Repo.
        </h2>
        <h2 className="ingredient-list-header">Create an Account or Log In to add ingredients and recipes to our database!</h2>
        </>
      )}
      {user && (
        <button className="add-new-ingredient-button" onClick={handleClick}>
          Add New Ingredient
        </button>
      )}
      <div className="ingredients-list">
        <main className="ingredient-list">
          {ingredients.map((ingredient) => {
            return (
              <IngredientCard
                key={ingredient.id}
                name={ingredient.name}
                image={ingredient.image}
                description={ingredient.description}
                handleDeleteIngredient={handleDeleteIngredient}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default IngredientList;
