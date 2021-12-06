import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewRecipeIngredientCard from "../NewRecipeIngredientCard/NewRecipeIngredientCard";
import NewRecipeIngredientForm from "../NewRecipeIngredientForm/NewRecipeIngredientForm";
import "./NewRecipeForm.css";

function NewRecipeForm({
  recipes,
  addNewRecipe,
  ingredients,
  user,
  findAssociatedIngredientNewRecipe,
  unitList,
}) {
  let newRecipeId = recipes.length + 1;
  let history = useHistory();

  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeImage, setNewRecipeImage] = useState("");
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipeInstructions, setNewRecipeInstructions] = useState("");
  const [newRecipeIngredients, setNewRecipeIngredients] = useState([]);

  console.log(newRecipeIngredients);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        name: newRecipeName,
        image: newRecipeImage,
        description: newRecipeDescription,
        instructions: newRecipeInstructions,
        recipe_ingredients: newRecipeIngredients,
      }),
    })
      .then((res) => res.json())
      .then((newRecipe) => {
        console.log(newRecipe);
        addNewRecipe(newRecipe);
        history.push("/");
      });
  }
  return (
    <>
      <h1 className="new-recipe-form-head">Share A New Recipe:</h1>
      <div className="new-recipe-form-container">
        <form onSubmit={handleSubmit}>
          <div className="new-recipe-input-container">
            <label>Recipe Name:</label>
            <input
              className="new-recipe-input"
              type="text"
              name="recipeName"
              placeholder="Recipe Name"
              value={newRecipeName}
              onChange={(e) => {
                setNewRecipeName(e.target.value);
              }}
            ></input>
          </div>
          <div className="new-recipe-input-container">
            <label>Recipe Image:</label>
            <input
              className="new-recipe-input"
              type="text"
              name="recipeImage"
              placeholder="Google a JPG, right click, copy image address, paste it here"
              value={newRecipeImage}
              onChange={(e) => {
                setNewRecipeImage(e.target.value);
              }}
            ></input>
          </div>
          <div className="new-recipe-input-container">
            <label>Description:</label>
            <input
              className="new-recipe-input"
              type="text"
              name="recipeDescription"
              placeholder="Brief Description"
              value={newRecipeDescription}
              onChange={(e) => {
                setNewRecipeDescription(e.target.value);
              }}
            ></input>
          </div >
          <NewRecipeIngredientForm
          className="new-recipe-ingredient-form-container"
            ingredients={ingredients}
            unitList={unitList}
            newRecipeIngredients={newRecipeIngredients}
            setNewRecipeIngredients={setNewRecipeIngredients}
            newRecipeId={newRecipeId}
          />
          <br></br>
          <div className="new-recipe-ingredients-container">
            {newRecipeIngredients.map((newRecipeIngredient, i) => (
              <NewRecipeIngredientCard
                newRecipeIngredients={newRecipeIngredients}
                setNewRecipeIngredients={setNewRecipeIngredients}
                associatedIngredient={findAssociatedIngredientNewRecipe(
                  newRecipeIngredient
                )}
                newRecipeIngredient={newRecipeIngredient}
                key={i}
                ingredientIndex={i}
              />
            ))}
          </div>
          <p className="new-recipe-instructions-head">Recipe Instructions:</p>
          <div className="new-recipe-instructions-input-container">
            <textarea
              className="new-recipe-instructions-input"
              rows="10"
              cols="63"
              name="recipeInstructions"
              placeholder="Step-By-Step Instructions"
              value={newRecipeInstructions}
              onChange={(e) => {
                setNewRecipeInstructions(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="submit-button">
            <input
              className="submit-recipe-button"
              type="submit"
              value="Share Recipe"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;
