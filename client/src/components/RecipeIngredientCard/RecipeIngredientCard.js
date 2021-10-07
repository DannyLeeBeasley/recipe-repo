import React, { useState } from "react";
import "./RecipeIngredientCard.css";

function RecipeIngredientCard({
  ingredient,
  recipeIngredients,
  setRecipeIngredients,
  ingredientIndex,
}) {
  function handleRemoveClick() {
    const list = [...recipeIngredients];
    list.splice(ingredientIndex, 1);
    setRecipeIngredients(list);
  }

  console.log(ingredient);

  return (
    <div className="recipe-ingredient">
      <p className="new-recipe-ingredient-text">
        {ingredient.amount}&nbsp;{ingredient.unit}&nbsp;{ingredient.name}
      </p>
      <img
        className="new-recipe-ingredient-img"
        alt={ingredient.name}
        src={ingredient.image}
      ></img>
      <input className="recipe-ingredient-delete-button"
        type="button"
        value="Remove Ingredient"
        onClick={() => handleRemoveClick()}
      ></input>
    </div>
  );
}

export default RecipeIngredientCard;
