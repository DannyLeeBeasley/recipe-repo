import React, { useState } from "react";
import "./UpdateRecipeIngredientForm.css";

function UpdateRecipeIngredientForm({
  ingredients,
  recipeToUpdateRecipeIngredients,
  setRecipeToUpdateRecipeIngredients,
  recipeToUpdateRecipeId,
  unitList
}) {
  const [selectedIngredientId, setSelectedIngredientId] = useState(0);
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");
  const [prepNotes, setPrepNotes] = useState("");

  function handleAddClick() {
    if (selectedIngredientId === 0) return;
    setRecipeToUpdateRecipeIngredients((recipeToUpdateRecipeIngredients) => [
      ...recipeToUpdateRecipeIngredients,
      {
        recipe_id: recipeToUpdateRecipeId,
        ingredient_id: selectedIngredientId,
        amount: ingredientAmount,
        unit: unitOfMeasurement,
        prep_notes: prepNotes,
      },
    ]);
  }

  return (
    <>
      <p className="update-recipe-ingredient-form-head">Add Ingredients:</p>
      <div className="update-recipe-ingredient-form">
        <div className="update-recipe-ingredient-input-container update-recipe-amount">
          <label>Amount:</label>
          <input
            className="update-recipe-ingredient-input"
            type="text"
            name="ingredientAmount"
            placeholder="0.00"
            value={ingredientAmount}
            onChange={(e) => {
              setIngredientAmount(e.target.value);
            }}
          ></input>
        </div>
        <div className="update-recipe-ingredient-input-container update-recipe-unit">
          <label>Unit:</label>
          <select
            className="new-recipe-unit-select"
            name="unit"
            value={unitOfMeasurement}
            onChange={(e) => {
              setUnitOfMeasurement(String(e.target.value));
            }}
          >
            <option> ------- </option>
            {unitList.map((unit) => {
              return <option value={unit}>{unit}</option>;
            })}
          </select>
        </div>
        <select
        className="update-recipe-ingredient-select"
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
        <div className="update-recipe-ingredient-input-container update-recipe-prep-notes">
          <label>Prep Notes:</label>
          <input
            className="update-recipe-ingredient-input"
            type="text"
            name="prepNotes"
            placeholder='e.g. "seeded and chopped"'
            value={prepNotes}
            onChange={(e) => {
              setPrepNotes(e.target.value);
            }}
          ></input>
        </div>
        <input
          className="add-recipe-ingredient-button"
          type="button"
          value="Add Ingredient"
          onClick={handleAddClick}
        ></input>
      </div>
    </>
  );
}

export default UpdateRecipeIngredientForm;
