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
  unitList,
  recipeIngredients,
  setRecipeIngredients,
  recipe,
  user,
  recipes,
}) {
  let { id } = useParams();
  let history = useHistory();

  let recipeToUpdate = recipes.find((recipe) => recipe.id == id);
  let recipeToUpdateRecipeId = recipeToUpdate.id;

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


  function handleSubmit(e) {
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
          <div className="update-recipe-input-container">
          <label>Recipe Name:</label>
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
            </div>
            <div className="update-recipe-input-container">
            <label>Recipe Image:</label>
            <input
              className="update-recipe-input"
              type="text"
              name="recipeImage"
              placeholder="Google a JPG, right click, copy image address, paste it here"
              value={recipeToUpdateImage}
              onChange={(e) => {
                setRecipeToUpdateImage(e.target.value);
              }}
            ></input>
            </div>
            <div className="update-recipe-input-container">
            <label>Description:</label>
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
            </div>
          <UpdateRecipeIngredientForm
          className="update-recipe-ingredient-form-container"
            recipeToUpdateRecipeId={recipeToUpdateRecipeId}
            ingredients={ingredients}
            unitList={unitList}
            recipeToUpdateRecipeIngredients={recipeToUpdateRecipeIngredients}
            setRecipeToUpdateRecipeIngredients={
              setRecipeToUpdateRecipeIngredients
            }
          />
          <br></br>
          <div className="update-recipe-ingredients-container">
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
          <p className="update-recipe-instructions-head">Recipe Instructions:</p>
          <div className="update-recipe-instructions-input-container">
            <textarea
              className="update-recipe-instructions-input"
              rows="10"
              cols="63"
              name="recipeInstructions"
              placeholder="Step-By-Step Instructions"
              value={recipeToUpdateInstructions}
              onChange={(e) => {
                setRecipeToUpdateInstructions(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="submit-update-button">
            <input
              className="submit-update-recipe-button"
              type="submit"
              value="Update Recipe"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateRecipeForm;
