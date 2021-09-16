import React from "react";
import { useHistory } from "react-router-dom";
import "./RecipeCard.css"

function RecipeCard({ recipe, name, image, description, handleDeleteRecipe }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/updaterecipe/${recipe.id}`);
  }
  
  function viewRecipe() {
    history.push(`/viewrecipe/${recipe.id}`)
  }


  return (
    <li className="recipe-card">
      <h4 className="recipe-name">{name}</h4>
      <img className="recipe-image" src={image} alt={"recipe image"} onClick={viewRecipe}/>
      <p className="recipe-description">{description}</p>
      <button onClick={handleClick}>Update Recipe</button>
      <button
        className="submit"
        onClick={(e) => {
          handleDeleteRecipe(recipe.id);
        }}
      >
        Delete Recipe
      </button>
    </li>
  );
}

export default RecipeCard;
