import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ViewRecipeIngredientCard from "../ViewRecipeIngredientCard/ViewRecipeIngredientCard";

function ViewRecipe({ recipes, ingredients, findAssociatedIngredientToView }) {
  let { id } = useParams();

  let recipeToView = recipes.find(recipe => recipe.id == id);
  console.log(recipeToView);

  const [recipeToViewRecipeIngredients, setRecipeToViewRecipeIngredients] =
    useState(recipeToView.recipe_ingredients);
  console.log(recipeToViewRecipeIngredients);

  let recipeToViewRecipeIngredientsIngredientIds =
    recipeToViewRecipeIngredients.map(
      (recipeToViewRecipeIngredient) =>
        recipeToViewRecipeIngredient.ingredient_id
    );
  console.log(recipeToViewRecipeIngredientsIngredientIds);

  const [recipeToViewIngredients, setRecipeToViewIngredients] = useState(
    ingredients.filter((ingredient) =>
      recipeToViewRecipeIngredientsIngredientIds.includes(ingredient.id)
    )
  );
  console.log(recipeToViewIngredients);

  return (
    <div>
      <h1>{recipeToView.name}</h1>
      <img src={recipeToView.image} alt={recipeToView.name} />
      <h2>{recipeToView.description}</h2>
      <ul>
        {recipeToViewRecipeIngredients.map(
          (recipeToViewRecipeIngredient, i) => (
            <ViewRecipeIngredientCard
              key={i}
              recipeToViewRecipeIngredient={recipeToViewRecipeIngredient}
              associatedIngredient={findAssociatedIngredientToView(
                recipeToViewRecipeIngredient
              )}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default ViewRecipe;
