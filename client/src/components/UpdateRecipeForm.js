import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import RecipeIngredientCard from "./RecipeIngredientCard";
import RecipeIngredient from "./RecipeIngredientForm";
import { useHistory } from "react-router-dom";

function UpdateRecipeForm({ updateRecipe, ingredients, recipe, user, recipes }) {
  let {id} = useParams()
  let history = useHistory();

  console.log(id)
  console.log(recipes)
  let recipeToUpdate = recipes.find(recipe => recipe.id == id)
  console.log(recipeToUpdate)

  const [userId, setUserId] = useState(recipeToUpdate.user_id);
  const [name, setName] = useState(recipeToUpdate.name);
  const [image, setImage] = useState(recipeToUpdate.image);
  const [description, setDescription] = useState(recipeToUpdate.description);

  let updatedRecipeIngredientIds = recipeToUpdate.ingredient_ids
  
  let updatedRecipeIngredients = ingredients.filter(ingredient => updatedRecipeIngredientIds.includes(ingredient.id))
  const [recipeIngredients, setRecipeIngredients] = useState(updatedRecipeIngredients);


  function handleSubmit(e) {
    console.log("hi");
    e.preventDefault();
    fetch(`/recipes/${id}`, {
      method: "PATCH",
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
      .then((updatedRecipe) => {
        updateRecipe(updatedRecipe);
        history.push("/");
      });
  }
  return (
    <div className="new-recipe-form">
      <h1 className="new-recipe-form-head">Update Recipe</h1>
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
        <RecipeIngredient ingredients={ingredients} setRecipeIngredients={setRecipeIngredients}/>
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
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default UpdateRecipeForm;