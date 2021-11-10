import React, { useState } from "react";
import "./NewRecipeIngredientCard.css";

function NewRecipeIngredientCard({
  newRecipeIngredient,
  associatedIngredient, 
  ingredientIndex,
  newRecipeIngredients,
  setNewRecipeIngredients
}) {
  // console.log(newRecipeIngredient);
  // console.log(newRecipeIngredients);
  // console.log(associatedIngredient);

  function handleRemoveClick() {
    const list = [...newRecipeIngredients];
    list.splice(ingredientIndex, 1);
    setNewRecipeIngredients(list);
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
          {newRecipeIngredient.amount}&nbsp;
          {newRecipeIngredient.unit}
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

export default NewRecipeIngredientCard;
