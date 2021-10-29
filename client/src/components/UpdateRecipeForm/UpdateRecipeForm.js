import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import UpdateRecipeIngredientCard from "../UpdateRecipeIngredientCard/UpdateRecipeIngredientCard";
import RecipeIngredientForm from "../RecipeIngredientForm/RecipeIngredientForm";

function UpdateRecipeForm({ updateRecipe, ingredients, recipeIngredients, setRecipeIngredients, recipe, user, recipes }) {
  let {id} = useParams()
  let history = useHistory();

  console.log(id)
  console.log(recipes)

  let recipeToUpdate = recipes.find(recipe => recipe.id == id)

  console.log(recipeToUpdate)

  // const [recipeId, setRecipeId] = useState(recipeToUpdate.id);
  const [userId, setUserId] = useState(recipeToUpdate.user_id);
  const [recipeToUpdateName, setRecipeToUpdateName] = useState(recipeToUpdate.name);
  const [recipeToUpdateImage, setRecipeToUpdateImage] = useState(recipeToUpdate.image);
  const [recipeToUpdateDescription, setRecipeToUpdateDescription] = useState(recipeToUpdate.description);

  // let updatedRecipeIngredientIds = recipeToUpdate.ingredient_ids
  
  let updatedRecipeIngredients = recipeIngredients.filter(recipeIngredient => recipeIngredient.recipe_id === recipeToUpdate.id)
  // const [recipeIngredients, setRecipeIngredients] = useState(updatedRecipeIngredients);


  function handleSubmit(e) {
    console.log("hi");
    e.preventDefault();
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        user_id: userId,
        name: recipeToUpdateName,
        image: recipeToUpdateImage,
        description: recipeToUpdateDescription,
        // ingredient_ids: recipeIngredients.map((recipeIngredient) => {
        //   return recipeIngredient.id;
        // }),
        recipe_ingredients: recipeIngredients
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
        </label>
        <br /> */}
        <label>
          Recipe Name
          <input
            type="text"
            name="recipeName"
            placeholder="Recipe Name"
            value={recipeToUpdateName}
            onChange={(e) => {
              setRecipeToUpdateName(e.target.value);
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
            value={recipeToUpdateImage}
            onChange={(e) => {
              setRecipeToUpdateImage(e.target.value);
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
            value={recipeToUpdateDescription}
            onChange={(e) => {
              setRecipeToUpdateDescription(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <RecipeIngredientForm ingredients={ingredients} recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients}/>
        <br></br>
        <div className="new-recipe-body">
        {recipeIngredients.map((recipeIngredient, i) => (
          <UpdateRecipeIngredientCard
            setRecipeIngredients={setRecipeIngredients}
            recipeIngredients={recipeIngredients}
            amount={recipeIngredient.amount}
            unit={recipeIngredient.unit}
            name={recipeIngredient.ingredient.name}
            recipeIngredient={recipeIngredient}
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