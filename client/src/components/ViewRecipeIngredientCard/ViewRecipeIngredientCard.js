import React from "react";
import "./ViewRecipeIngredientCard.css";

function ViewRecipeIngredientCard({
  recipeToViewRecipeIngredient,
  associatedIngredient,
}) {
  return (
    <div className="recipe-ingredient">
      <img
        className="recipe-ingredient-img"
        alt={associatedIngredient.name}
        src={associatedIngredient.image}
      ></img>
      <div>
        <p className="recipe-ingredient-text">
          {recipeToViewRecipeIngredient.amount}&nbsp;
          {recipeToViewRecipeIngredient.unit}&nbsp;
          {associatedIngredient.name}&nbsp;
        </p>
        <p className="recipe-ingredient-text recipe-ingredient-prep-notes-text">
          {recipeToViewRecipeIngredient.prep_notes}
        </p>
      </div>
    </div>
  );
}

export default ViewRecipeIngredientCard;
