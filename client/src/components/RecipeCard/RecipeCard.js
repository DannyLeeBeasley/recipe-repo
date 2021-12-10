import React from "react";
import { useHistory } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({
  recipe,
  name,
  image,
  description,
  deleteRecipe,
  user,
  users,
}) {
  let history = useHistory();
  console.log(users);

  let recipeUser = users.filter((user) => user.id === recipe.user_id);
  console.log(recipeUser)
  console.log(recipeUser[0].username)

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
        {!user ? null : recipe.user_id === user?.id ? (
          <button className="update-recipe-button" onClick={handleClick}>
            Update Recipe
          </button>
        ) : (
          <p className="recipe-from-text">Recipe From:</p>
        )}
        {!user ? null : recipe.user_id === user?.id ? (
          <button
            className="delete-recipe-button"
            onClick={(e) => {
              if (
                window.confirm("Are You Sure You Want To Delete This Recipe?")
              ) {
                deleteRecipe(recipe.id);
              }
            }}
          >
            Delete Recipe
          </button>
        ) : (
          <p className="username-text">{recipeUser[0].username}</p>
        )}
      </div>
    </li>
  );
}

export default RecipeCard;
