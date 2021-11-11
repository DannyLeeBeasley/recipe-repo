import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import UpdateRecipeIngredientCard from "../UpdateRecipeIngredientCard/UpdateRecipeIngredientCard";
import UpdateRecipeIngredientForm from "../UpdateRecipeIngredientForm/UpdateRecipeIngredientForm";
import "./UpdateRecipeForm.css";

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

  // console.log(id);

  let recipeToUpdate = recipes.find((recipe) => recipe.id == id);
  let recipeToUpdateRecipeId = recipeToUpdate.id;

  // console.log(recipeToUpdate);
  // console.log(recipeToUpdateRecipeId);

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
  const [recipeToUpdateInstructions, setRecipeToUpdateInstructions] = useState(
    recipeToUpdate.instructions
  );
  const [recipeToUpdateRecipeIngredients, setRecipeToUpdateRecipeIngredients] =
    useState(recipeToUpdate.recipe_ingredients);
  console.log(recipeToUpdateRecipeIngredients);

  // let updatedRecipeIngredientIds = recipeToUpdate.ingredient_ids

  // let updatedRecipeIngredients = recipeIngredients.filter(recipeIngredient => recipeIngredient.recipe_id === recipeToUpdate.id)

  // const [recipeIngredients, setRecipeIngredients] = useState(updatedRecipeIngredients);

  function handleSubmit(e) {
    console.log("hi");
    console.log(recipeToUpdateRecipeIngredients);
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
        instructions: recipeToUpdateInstructions,
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
    <>
      <h1 className="update-recipe-form-head">Update Your Recipe</h1>
      <div className="update-recipe-form-container">
        <form onSubmit={handleSubmit}>
          <br />
          <label>
            Recipe Name
            <input
              className="update-recipe-input"
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
              className="update-recipe-input"
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
              className="update-recipe-input"
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
            recipeToUpdateRecipeId={recipeToUpdateRecipeId}
            ingredients={ingredients}
            recipeToUpdateRecipeIngredients={recipeToUpdateRecipeIngredients}
            setRecipeToUpdateRecipeIngredients={
              setRecipeToUpdateRecipeIngredients
            }
          />
          <br></br>
          <div className="update-recipe-body">
            {recipeToUpdateRecipeIngredients.map(
              (recipeToUpdateRecipeIngredient, i) => (
                <UpdateRecipeIngredientCard
                  key={i}
                  recipeToUpdateRecipeIngredient={
                    recipeToUpdateRecipeIngredient
                  }
                  recipeToUpdateRecipeIngredients={
                    recipeToUpdateRecipeIngredients
                  }
                  setRecipeToUpdateRecipeIngredients={
                    setRecipeToUpdateRecipeIngredients
                  }
                  ingredientIndex={i}
                  associatedIngredient={findAssociatedIngredientToUpdate(
                    recipeToUpdateRecipeIngredient
                  )}
                  recipeToUpdateRecipeId={recipeToUpdateRecipeId}
                />
              )
            )}
          </div>
          <br />
          <label>
            Instructions
            <input
              className="update-recipe-input"
              type="text"
              name="recipeInstructions"
              placeholder="Step-By-Step Instructions"
              value={recipeToUpdateInstructions}
              onChange={(e) => {
                setRecipeToUpdateInstructions(e.target.value);
              }}
            ></input>
          </label>
          <div className="submit-button">
            <input
              className="submit-update-recipe-button"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateRecipeForm;
