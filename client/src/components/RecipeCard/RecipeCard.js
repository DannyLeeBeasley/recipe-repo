import React from "react";
import { useHistory } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({
  recipe,
  name,
  image,
  description,
  handleDeleteRecipe,
  user,
}) {
  let history = useHistory();

  function handleClick() {
    history.push(`/updaterecipe/${recipe.id}`);
  }

  function viewRecipe() {
    history.push(`/viewrecipe/${recipe.id}`);
  }

  return (
    <li className="recipe-card">
      <h4 className="recipe-name">{name}</h4>
      <img
        className="recipe-image"
        src={image}
        alt={"recipe"}
        onClick={viewRecipe}
      />
      <div className="recipe-card-bottom">
        <p className="recipe-description">{description}</p>
        {recipe.user_id === user?.id ? (
          <button className="update-recipe-button" onClick={handleClick}>
            Update Recipe
          </button>
        ) : (
          <p>Recipe From:</p>
        )}
        {recipe.user_id === user?.id ? (
          <button
            className="delete-recipe-button"
            onClick={(e) => {
              if (
                window.confirm("Are You Sure You Want To Delete This Recipe?")
              ) {
                handleDeleteRecipe(recipe.id);
              }
            }}
          >
            Delete Recipe
          </button>
        ) : (
          <p>{recipe.user_id}</p>
        )}
      </div>
    </li>
  );
}

export default RecipeCard;
