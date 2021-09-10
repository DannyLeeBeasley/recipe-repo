import React from "react";

function IngredientCard({ name, image, handleDeleteIngredient }) {
  return (
    <li className="ingredient-card">
      <h4 className="ingredient-name">{name}</h4>
      <img className="ingredient-image" src={image} alt={"ingredient image"} />
      {/* <button className="delete-ingredient-button" onClick={handleDeleteIngredient(e.target)}>Delete Ingredient</button> */}
      {/* <button className="delete-ingredient-button" onClick={handleDeleteIngredient(e.target)}>Delete Ingredient</button> */}
    </li>
  );
}

export default IngredientCard;