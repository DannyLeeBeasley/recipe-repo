import React, { useState } from "react";
import "./RecipeIngredientCard.css";

function RecipeIngredientCard({
  recipeIngredient,
  recipeIngredients,
  setRecipeIngredients,
  ingredientIndex,
}) {
  function handleRemoveClick() {
    const list = [...recipeIngredients];
    list.splice(ingredientIndex, 1);
    setRecipeIngredients(list);
  }

  console.log(recipeIngredient);

  return (
    <>
    <div className="recipe-ingredient">
      <p className="new-recipe-ingredient-text">
        {recipeIngredient.amount}&nbsp;{recipeIngredient.unit}&nbsp;{recipeIngredient.ingredient.name}
      </p>
      <img
        className="new-recipe-ingredient-img"
        alt={recipeIngredient.ingredient.name}
        src={recipeIngredient.ingredient.image}
      ></img>
      <input className="recipe-ingredient-delete-button"
        type="button"
        value="Remove Ingredient"
        onClick={() => handleRemoveClick()}
      ></input>
    </div>
    </>
  );
}

export default RecipeIngredientCard;
