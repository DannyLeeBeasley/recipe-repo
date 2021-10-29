import React, { useState } from "react";
import "./UpdateRecipeIngredientCard.css";

function UpdateRecipeIngredientCard({
  recipeToUpdateRecipeIngredient,
  associatedIngredient,
}) {
  console.log(recipeToUpdateRecipeIngredient);
  console.log(associatedIngredient);

  return (
    <>
      <div className="recipe-ingredient">
        <p className="new-recipe-ingredient-text">
          {recipeToUpdateRecipeIngredient.amount}&nbsp;
          {recipeToUpdateRecipeIngredient.unit}
          &nbsp;{associatedIngredient.name}
        </p>
        <img
          className="new-recipe-ingredient-img"
          alt={associatedIngredient.name}
          src={associatedIngredient.image}
        ></img>
        {/* <input
          className="recipe-ingredient-delete-button"
          type="button"
          value="Remove Ingredient"
          onClick={() => handleRemoveClick()}
        ></input> */}
      </div>
    </>
  );
}

export default UpdateRecipeIngredientCard;
