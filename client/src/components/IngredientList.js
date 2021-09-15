import React from "react";
import IngredientCard from "./IngredientCard";

function IngredientList({ ingredients, handleDeleteIngredient }) {
  return (
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
  );
}

export default IngredientList;
