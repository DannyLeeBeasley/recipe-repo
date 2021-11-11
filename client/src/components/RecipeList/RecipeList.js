import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipes, handleDeleteRecipe, user }) {
  return (
    <main className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            className="recipe-card"
            key={recipe.id}
            user={user}
            recipe={recipe}
            name={recipe.name}
            image={recipe.image}
            description={recipe.description}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        );
      })}
    </main>
  );
}

export default RecipeList;
