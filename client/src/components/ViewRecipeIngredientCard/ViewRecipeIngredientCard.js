import React, { useState } from "react";
import "./ViewRecipeIngredientCard.css";

function ViewRecipeIngredientCard({
  recipeToViewRecipeIngredient,
  associatedIngredient,
}) {
  console.log(recipeToViewRecipeIngredient);
  console.log(associatedIngredient);

  return (
    <>
      <div className="recipe-ingredient">
        <img
          className="new-recipe-ingredient-img"
          alt={associatedIngredient.name}
          src={associatedIngredient.image}
        ></img>
        <p className="new-recipe-ingredient-text">
          {recipeToViewRecipeIngredient.amount}&nbsp;
          {recipeToViewRecipeIngredient.unit}
          &nbsp;{associatedIngredient.name}
        </p>
      </div>
    </>
  );
}

export default ViewRecipeIngredientCard;
