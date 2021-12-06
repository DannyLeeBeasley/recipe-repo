import React from "react";
import "./UpdateRecipeIngredientCard.css";

function UpdateRecipeIngredientCard({
  recipeToUpdateRecipeIngredient,
  recipeToUpdateRecipeIngredients,
  setRecipeToUpdateRecipeIngredients,
  associatedIngredient,
  ingredientIndex,
  recipeToUpdateRecipeId,
}) {
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
          className="update-recipe-ingredient-img"
          alt={associatedIngredient.name}
          src={associatedIngredient.image}
        ></img>
        <div>
          <p className="update-recipe-ingredient-text">
            {recipeToUpdateRecipeIngredient.amount}&nbsp;
            {recipeToUpdateRecipeIngredient.unit}&nbsp;
            {associatedIngredient.name}&nbsp;
          </p>
          <p className="update-recipe-ingredient-text update-recipe-ingredient-prep-notes-text">
            {recipeToUpdateRecipeIngredient.prep_notes}
          </p>
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

export default UpdateRecipeIngredientCard;
