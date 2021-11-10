import React, { useState } from "react";
import "./UpdateRecipeIngredientForm.css";

function UpdateRecipeIngredientForm({
  ingredients,
  recipeToUpdateRecipeIngredients,
  setRecipeToUpdateRecipeIngredients,
  recipeToUpdateRecipeId,
}) {
  const [selectedIngredientId, setSelectedIngredientId] = useState(0);
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");

  function handleAddClick() {
    if (selectedIngredientId === 0) return;
    setRecipeToUpdateRecipeIngredients((recipeToUpdateRecipeIngredients) => [
      ...recipeToUpdateRecipeIngredients,
      {
        recipe_id: recipeToUpdateRecipeId,
        ingredient_id: selectedIngredientId,
        amount: ingredientAmount,
        unit: unitOfMeasurement,
      },
    ]);
  }

  return (
    <>
      <h3>Add Ingredients</h3>
      <div className="update-recipe-ingredient-form">
        <div className="update-recipe-ingredient-form">
          <label>Ingredient Amount:</label>
            <input
              className="update-recipe-ingredient-input"
              type="text"
              name="ingredientAmount"
              placeholder="Ingredient Amount"
              value={ingredientAmount}
              onChange={(e) => {
                setIngredientAmount(e.target.value);
              }}
            ></input>
          </div>
          <br />
          <div className="update-recipe-ingredient-input">
          <label>Unit Of Measurement:</label>
            <input
              className="update-recipe-ingredient-input"
              type="text"
              name="unitOfMeasurement"
              placeholder="Unit Of Measurement"
              value={unitOfMeasurement}
              onChange={(e) => {
                setUnitOfMeasurement(e.target.value);
              }}
            ></input>
          </div>
          <select
            name="ingredient"
            value={selectedIngredientId}
            onChange={(e) => {
              setSelectedIngredientId(Number(e.target.value));
            }}
          >
            <option>-Select Ingredient-</option>
            {ingredients.map((ingredient) => {
              return <option value={ingredient.id}>{ingredient.name}</option>;
            })}
          </select>
          <input
            type="button"
            value="Add Ingredient"
            onClick={handleAddClick}
          ></input>
      </div>
    </>
  );
}

export default UpdateRecipeIngredientForm;
