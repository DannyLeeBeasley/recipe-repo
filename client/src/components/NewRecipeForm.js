import React, { useState } from "react";
import RecipeIngredientCard from "./RecipeIngredientCard";

function NewRecipeForm({ addNewRecipe, ingredients, user }) {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [selectedIngredientId, setSelectedIngredientId] = useState(0);

  function handleAddClick() {
    if (selectedIngredientId === 0) return;
    setRecipeIngredients([
      ...recipeIngredients,
      ingredients.find((ingredient) => ingredient.id === selectedIngredientId),
    ]);
  }

  function handleSubmit(e) {
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
      .then((newRecipe) => addNewRecipe(newRecipe));
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
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewRecipeForm;
