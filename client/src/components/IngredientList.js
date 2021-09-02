import React from "react";
import IngredientCard from "./IngredientCard";

function IngredientList({ ingredients }) {
  return (
    <ul className="cards">
      {ingredients.map((ingredient) => {
        return (
          <IngredientCard
            key={ingredient.id}
            name={ingredient.name}
            image={ingredient.image}
            description={ingredient.description}
          />
        );
      })}
    </ul>
  );
}

export default IngredientList;
