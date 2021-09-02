import React from "react";

function IngredientCard({ name, image }) {
  return (
    <li className="ingredient-card">
      <h4 className="ingredient-name">{name}</h4>
      <img className="ingredient-image" src={image} alt={"ingredient image"} />
    </li>
  );
}

export default IngredientCard;