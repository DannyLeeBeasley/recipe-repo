import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <ul className="cards">
      {recipes.map((recipe) => {
        return(
        <RecipeCard
         key={recipe.id}
         recipe={recipe}
         name={recipe.name}
         image={recipe.image}
         description={recipe.description}
         deleteRecipe={deleteRecipe}
        />
        );
      })}
    </ul>
  );
}

export default RecipeList;
