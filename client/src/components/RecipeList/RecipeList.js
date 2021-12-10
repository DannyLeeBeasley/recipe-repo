import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

function RecipeList({
  recipes,
  deleteRecipe,
  user,
  users,
  usersLoaded,
  ingredientsLoaded,
  recipesLoaded,
  recipeIngredientsLoaded,
}) {
  if (
    !usersLoaded ||
    !ingredientsLoaded ||
    !recipesLoaded ||
    !recipeIngredientsLoaded
  ) {
    return <p>Loading...</p>;
  }

  return (
    <main className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            className="recipe-card"
            key={recipe.id}
            user={user}
            users={users}
            recipe={recipe}
            name={recipe.name}
            image={recipe.image}
            description={recipe.description}
            deleteRecipe={deleteRecipe}
          />
        );
      })}
    </main>
  );
}

export default RecipeList;
