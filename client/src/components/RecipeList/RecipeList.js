import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeList({ recipes, handleDeleteRecipe }) {
  return (
    <main className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            className="recipe-card"
            key={recipe.id}
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
