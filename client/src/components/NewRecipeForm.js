import React, { useState } from "react";
import RecipeIngredientCard from "./RecipeIngredientCard";
import RecipeIngredientForm from "./RecipeIngredientForm";
import { useHistory } from "react-router-dom";
import "./NewRecipeForm.css"

function NewRecipeForm({ addNewRecipe, ingredients, user }) {
  let history = useHistory();
  
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  function handleSubmit(e) {
    console.log("hi");
    e.preventDefault();
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        name: name,
        image: image,
        description: description,
        ingredient_ids: recipeIngredients.map((recipeIngredient) => {
          return recipeIngredient.id;
        }),
      }),
    })
      .then((res) => res.json())
      .then((newRecipe) => {
        addNewRecipe(newRecipe)
        history.push("/");
      });
  }
  return (
    <div className="new-recipe-form">
      <h1 className="new-recipe-form-head">New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
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
        </label>
        <br />
        <label>
          Recipe Name
          <input
            type="text"
            name="recipeName"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <RecipeIngredientForm ingredients={ingredients} setRecipeIngredients={setRecipeIngredients}/>
        <br></br>
        <div className="new-recipe-body">
        {recipeIngredients.map((ingredient, i) => (
          <RecipeIngredientCard
            setRecipeIngredients={setRecipeIngredients}
            recipeIngredients={recipeIngredients}
            name={ingredient.name}
            ingredient={ingredient}
            key={i}
            ingredientIndex={i}
          />
        ))}
      </div>
        <input 

        className="submit-recipe-button"
        type="submit" 
        value="Submit">
        </input>
      </form>
    </div>
  );
}

export default NewRecipeForm;
