import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, handleDeleteRecipe }) {
  return (
    <ul>
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
    </ul>
  );
}

export default RecipeList;
