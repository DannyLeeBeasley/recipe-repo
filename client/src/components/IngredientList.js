import React from "react";
import IngredientCard from "./IngredientCard";
import { useHistory } from "react-router-dom";

function IngredientList({ ingredients, handleDeleteIngredient }) {

  let history = useHistory();

  function handleClick() {
    history.push("/newingredient");
  }

  return (
    <>
    <button onClick={handleClick}>Add New Ingredient</button>
    <div className="ingredients-list">
      <ul>
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
    </ul>
    </div>
    </>
  );
}

export default IngredientList;
