import React, { useState } from "react";

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

  return (
    <div className="new-recipe-card">
      <div>
        <img
          className="new-recipe-ingredient-img"
          alt={ingredient.name}
          src={ingredient.image}
        ></img>
      </div>

      <div className="new-recipe-card-name">{ingredient.name}</div>
      <input
        type="button"
        value="Remove Ingredient"
        onClick={() => handleRemoveClick()}
      ></input>
    </div>
  );
}

export default RecipeIngredientCard;