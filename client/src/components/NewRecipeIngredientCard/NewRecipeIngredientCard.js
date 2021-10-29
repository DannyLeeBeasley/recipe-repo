import React, { useState } from "react";
import "./NewRecipeIngredientCard.css";

function NewRecipeIngredientCard({
  recipeToViewRecipeIngredient,
  associatedIngredient
}) {
  console.log(recipeToViewRecipeIngredient);
  console.log(associatedIngredient);

  return (
    <>
      <div className="recipe-ingredient">
        <p className="new-recipe-ingredient-text">
          {recipeToViewRecipeIngredient.amount}&nbsp;
          {recipeToViewRecipeIngredient.unit}
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

export default NewRecipeIngredientCard;
