import React from "react";
import "./ViewRecipeIngredientCard.css";

function ViewRecipeIngredientCard({
  recipeToViewRecipeIngredient,
  associatedIngredient,
}) {

  let amount = "";

  if (parseFloat(recipeToViewRecipeIngredient.amount) % 1 === 0) {
    amount = parseFloat(recipeToViewRecipeIngredient.amount).toFixed(0);
  } else {
    console.log(recipeToViewRecipeIngredient.amount)
    const [,decimalPlaces] = recipeToViewRecipeIngredient.amount.split(".")
    if (decimalPlaces.length === 1){
      amount = parseFloat(recipeToViewRecipeIngredient.amount).toFixed(1);
    } else if (decimalPlaces[decimalPlaces.length -1] === "0") {
      amount = parseFloat(recipeToViewRecipeIngredient.amount).toFixed(1);
    }
    else {
      amount = parseFloat(recipeToViewRecipeIngredient.amount).toFixed(2);
    }
  }

  return (
    <div className="recipe-ingredient">
      <img
        className="recipe-ingredient-img"
        alt={associatedIngredient.name}
        src={associatedIngredient.image}
      ></img>
      <div>
        <p className="recipe-ingredient-text">
          {amount}&nbsp;
          {recipeToViewRecipeIngredient.unit}&nbsp;
          {associatedIngredient.name}&nbsp;
        </p>
        <p className="recipe-ingredient-text recipe-ingredient-prep-notes-text">
          {recipeToViewRecipeIngredient.prep_notes}
        </p>
      </div>
    </div>
  );
}

export default ViewRecipeIngredientCard;
