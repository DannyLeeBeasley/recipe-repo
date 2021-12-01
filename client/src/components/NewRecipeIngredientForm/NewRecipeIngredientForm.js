import React, { useState } from "react";
import "./NewRecipeIngredientForm.css";

function NewRecipeIngredientForm({
  ingredients,
  newRecipeIngredients,
  setNewRecipeIngredients,
  newRecipeId,
}) {
  const [selectedIngredientId, setSelectedIngredientId] = useState(0);
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");
  const [prepNotes, setPrepNotes] = useState("");

  function handleAddClick() {
    if (selectedIngredientId === 0) return;
    setNewRecipeIngredients((newRecipeIngredients) => [
      ...newRecipeIngredients,
      {
        recipe_id: newRecipeId,
        ingredient_id: selectedIngredientId,
        amount: ingredientAmount,
        unit: unitOfMeasurement,
        prep_notes: prepNotes,
      },
    ]);
  }

  return (
    <>
      <p className="new-recipe-ingredient-form-head">Add Ingredients:</p>
      <div className="new-recipe-ingredient-form">
        <div className="new-recipe-ingredient-input-container new-recipe-amount">
          <label>Amount:</label>
          <input
            className="new-recipe-ingredient-input"
            type="text"
            name="ingredientAmount"
            placeholder="0.00"
            value={ingredientAmount}
            onChange={(e) => {
              setIngredientAmount(e.target.value);
            }}
          ></input>
        </div>
        <div className="new-recipe-ingredient-input-container new-recipe-unit">
          <label>Unit:</label>
          <input
            className="new-recipe-ingredient-input"
            type="text"
            name="unitOfMeasurement"
            // placeholder="Unit"
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
        <div className="new-recipe-ingredient-input-container new-recipe-prep-notes">
          <label>Prep Notes:</label>
          <input
            className="new-recipe-ingredient-input"
            type="text"
            name="prepNotes"
            placeholder="Prep Notes"
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

export default NewRecipeIngredientForm;
