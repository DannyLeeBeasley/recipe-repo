import React from "react";
import IngredientCard from "./IngredientCard";
import { useHistory } from "react-router-dom";
import "./IngredientList.css"

function IngredientList({ ingredients, handleDeleteIngredient }) {

  let history = useHistory();

  function handleClick() {
    history.push("/newingredient");
  }

  return (
    <>
    <button onClick={handleClick}>Add New Ingredient</button>
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
