import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewRecipeIngredientCard from "../NewRecipeIngredientCard/NewRecipeIngredientCard";
import NewRecipeIngredientForm from "../NewRecipeIngredientForm/NewRecipeIngredientForm";
import "./NewRecipeForm.css";

function NewRecipeForm({
  addNewRecipe,
  ingredients,
  user,
  findAssociatedIngredientNewRecipe,
}) {
  let history = useHistory();

  // const [userId, setUserId] = useState("");
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
        addNewRecipe({
          ...newRecipe,
          recipe_ingredients: newRecipeIngredients,
        });
        history.push("/");
      });
  }
  return (
    <>
      <h1 className="new-recipe-form-head">Submit A New Recipe:</h1>
      <div className="new-recipe-form-container">
        <form onSubmit={handleSubmit}>
          <br />
          <label>
            Recipe Name
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
          </label>
          <br />
          <label>
            Recipe Image
            <input
              className="new-recipe-input"
              type="text"
              name="recipeImage"
              placeholder="Recipe Image"
              value={newRecipeImage}
              onChange={(e) => {
                setNewRecipeImage(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <label>
            Description
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
          </label>
          <br />
          <NewRecipeIngredientForm
            ingredients={ingredients}
            newRecipeIngredients={newRecipeIngredients}
            setNewRecipeIngredients={setNewRecipeIngredients}
          />
          <br></br>
          <div className="new-recipe-body">
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
          <br />
          <label>
            Instructions
            <input
              className="new-recipe-input"
              type="text"
              name="recipeInstructions"
              placeholder="Step-By-Step Instructions"
              value={newRecipeInstructions}
              onChange={(e) => {
                setNewRecipeInstructions(e.target.value);
              }}
            ></input>
          </label>
          <div className="submit-button">
          <input
            className="submit-recipe-button"
            type="submit"
            value="Submit Recipe"
          ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;
