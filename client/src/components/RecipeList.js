import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <ul className="cards">
      {recipes.map((recipe) => {
        return(
        <RecipeCard
         key={recipe.id}
         name={recipe.name}
         image={recipe.image}
         description={recipe.description}
        />
        );
      })}
    </ul>
  );
}

export default RecipeList;
