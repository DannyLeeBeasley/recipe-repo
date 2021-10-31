import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import UpdateRecipeIngredientCard from "../UpdateRecipeIngredientCard/UpdateRecipeIngredientCard";
import UpdateRecipeIngredientForm from "../UpdateRecipeIngredientForm/UpdateRecipeIngredientForm";

function UpdateRecipeForm({
  updateRecipe,
  ingredients,
  findAssociatedIngredientToUpdate,
  recipeIngredients,
  setRecipeIngredients,
  recipe,
  user,
  recipes,
}) {
  let { id } = useParams();
  let history = useHistory();

  console.log(id);

  let recipeToUpdate = recipes.find((recipe) => recipe.id == id);

  console.log(recipeToUpdate);

  const [userId, setUserId] = useState(recipeToUpdate.user_id);
  const [recipeToUpdateName, setRecipeToUpdateName] = useState(
    recipeToUpdate.name
  );
  const [recipeToUpdateImage, setRecipeToUpdateImage] = useState(
    recipeToUpdate.image
  );
  const [recipeToUpdateDescription, setRecipeToUpdateDescription] = useState(
    recipeToUpdate.description
  );
  const [recipeToUpdateRecipeIngredients, setRecipeToUpdateRecipeIngredients] =
    useState(recipeToUpdate.recipe_ingredients);
  console.log(recipeToUpdateRecipeIngredients);

  // let updatedRecipeIngredientIds = recipeToUpdate.ingredient_ids

  // let updatedRecipeIngredients = recipeIngredients.filter(recipeIngredient => recipeIngredient.recipe_id === recipeToUpdate.id)

  // const [recipeIngredients, setRecipeIngredients] = useState(updatedRecipeIngredients);

  function handleSubmit(e) {
    console.log("hi");
    console.log(recipeToUpdateRecipeIngredients)
    e.preventDefault();
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        name: recipeToUpdateName,
        image: recipeToUpdateImage,
        description: recipeToUpdateDescription,
        recipe_ingredients: recipeToUpdateRecipeIngredients,
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
        <UpdateRecipeIngredientForm
          ingredients={ingredients}
          recipeToUpdateRecipeIngredients={recipeToUpdateRecipeIngredients}
          setRecipeToUpdateRecipeIngredients={
            setRecipeToUpdateRecipeIngredients
          }
        />
        <br></br>
        <div className="new-recipe-body">
          {recipeToUpdateRecipeIngredients.map(
            (recipeToUpdateRecipeIngredient, i) => (
              <UpdateRecipeIngredientCard
                key={i}
                recipeToUpdateRecipeIngredient={recipeToUpdateRecipeIngredient}
                setRecipeToUpdateRecipeIngredients={
                  setRecipeToUpdateRecipeIngredients
                }
                ingredientIndex={i}
                associatedIngredient={findAssociatedIngredientToUpdate(
                  recipeToUpdateRecipeIngredient
                )}
              />
            )
          )}
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default UpdateRecipeForm;
