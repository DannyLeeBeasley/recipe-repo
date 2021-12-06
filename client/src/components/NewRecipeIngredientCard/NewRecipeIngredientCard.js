import React from "react";
import "./NewRecipeIngredientCard.css";

function NewRecipeIngredientCard({
  newRecipeIngredient,
  associatedIngredient,
  ingredientIndex,
  newRecipeIngredients,
  setNewRecipeIngredients,
}) {
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
        <div>
          <p className="new-recipe-ingredient-text">
            {newRecipeIngredient.amount}&nbsp;
            {newRecipeIngredient.unit}&nbsp;
            {associatedIngredient.name}&nbsp;
          </p>
          <p className="new-recipe-ingredient-text new-recipe-ingredient-prep-notes-text">{newRecipeIngredient.prep_notes}</p>
        </div>
        <input
          className="recipe-ingredient-delete-button"
          type="button"
          value="X"
          onClick={() => handleRemoveClick()}
        ></input>
      </div>
    </>
  );
}

export default NewRecipeIngredientCard;
