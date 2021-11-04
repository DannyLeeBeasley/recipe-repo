import React, { useState } from "react";
import "./UpdateRecipeIngredientCard.css";

function UpdateRecipeIngredientCard({
  recipeToUpdateRecipeIngredient,
  recipeToUpdateRecipeIngredients,
  setRecipeToUpdateRecipeIngredients,
  associatedIngredient,
  ingredientIndex,
  recipeToUpdateRecipeId
}) {
  // console.log(recipeToUpdateRecipeIngredient);
  // console.log(associatedIngredient);
  // console.log(recipeToUpdateRecipeIngredients);
  console.log(recipeToUpdateRecipeIngredient.id);

  function handleRemoveClick() {
    const list = [...recipeToUpdateRecipeIngredients];
    list.splice(ingredientIndex, 1);
    setRecipeToUpdateRecipeIngredients(list);
    fetch(`/recipe_ingredients/${recipeToUpdateRecipeIngredient.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => alert("Your Recipe Ingredient has been deleted"));
  }

  return (
    <>
      <div className="recipe-ingredient">
      <img
          className="new-recipe-ingredient-img"
          alt={associatedIngredient.name}
          src={associatedIngredient.image}
        ></img>
        <p className="new-recipe-ingredient-text">
          {recipeToUpdateRecipeIngredient.amount}&nbsp;
          {recipeToUpdateRecipeIngredient.unit}
          &nbsp;{associatedIngredient.name}
        </p>
        <input
          className="recipe-ingredient-delete-button"
          type="button"
          value="Remove Ingredient"
          onClick={() => handleRemoveClick()}
        ></input>
      </div>
    </>
  );
}

export default UpdateRecipeIngredientCard;
