import React from "react";

function RecipeCard({ recipe, name, image, description, handleDeleteRecipe }) {
  return (
    <li className="recipe-card">
      <h4 className="recipe-name">{name}</h4>
      <img className="recipe-image" src={image} alt={"recipe image"} />
      <p className="recipe-description">{description}</p>
      <button
        className="submit"
        onClick={(e) => {handleDeleteRecipe(recipe.id)}}
      >
        Delete Recipe
      </button>
      {/* <button
        className="submit"
        onClick={(e) => {
          fetch(`/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              image: image,
              description: description,
              ingredient_ids: 
            })
          })
            .then((res) => res.json())
            .then((updatedRecipe) => {
              updateRecipe(updatedRecipe);
            });
        }}
      >
        Update Recipe
      </button> */}
    </li>
  );
}

export default RecipeCard;
