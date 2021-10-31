import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewRecipeIngredientCard from "../NewRecipeIngredientCard/NewRecipeIngredientCard";
import NewRecipeIngredientForm from "../NewRecipeIngredientForm/NewRecipeIngredientForm";
import "./NewRecipeForm.css";

function NewRecipeForm({ addNewRecipe, ingredients, user, findAssociatedIngredientToView }) {
  let history = useHistory();

  // const [userId, setUserId] = useState("");
  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeImage, setNewRecipeImage] = useState("");
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipeIngredients, setNewRecipeIngredients] = useState([]);

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
        recipe_ingredients: newRecipeIngredients,
      }),
    })
      .then((res) => res.json())
      .then((newRecipe) => {
        addNewRecipe(newRecipe);
        history.push("/");
      });
  }
  return (
    <div className="new-recipe-form">
      <h1 className="new-recipe-form-head">New Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
          User ID
          <input
            type="text"
            name="userID"
            placeholder="User ID"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          ></input>
        </label> */}
        <br />
        <label>
          Recipe Name
          <input
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
              associatedIngredient={findAssociatedIngredientToView(
                newRecipeIngredient
              )}
              newRecipeIngredient={newRecipeIngredient}
              key={i}
              ingredientIndex={i}
            />
          ))}
        </div>
        <input
          className="submit-recipe-button"
          type="submit"
          value="Submit Recipe"
        ></input>
      </form>
    </div>
  );
}

export default NewRecipeForm;
