import React from "react";

function RecipeCard({ recipe, name, image, description, handleDeleteRecipe }) {
  return (
    <li className="recipe-card" >
      <h4 className="recipe-name">{name}</h4>
      <img className="recipe-image" src={image} alt={"recipe image"} />
     
      <p className="recipe-description">{description}</p>

      <button
        className="submit"
        onClick={(e) => {
          handleDeleteRecipe(recipe.id);
        }}
      >
        Delete Recipe
      </button>
      {/* <button onClick={}>
        Update Recipe
      </button> */}
    </li>
  );
}

export default RecipeCard;
