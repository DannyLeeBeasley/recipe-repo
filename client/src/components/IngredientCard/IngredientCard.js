import React from "react";
import "./IngredientCard.css";

function IngredientCard({ name, image, deleteIngredient }) {
  return (
    <li className="ingredient-card">
      <h4 className="ingredient-name">{name}</h4>
      <img className="ingredient-image" src={image} alt={"ingredient"} />
      {/* <button className="delete-ingredient-button" onClick={deleteIngredient(e.target)}>Delete Ingredient</button> */}
      {/* <button className="delete-ingredient-button" onClick={deleteIngredient(e.target)}>Delete Ingredient</button> */}
    </li>
  );
}

export default IngredientCard;
