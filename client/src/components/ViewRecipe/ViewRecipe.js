import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ViewRecipeIngredientCard from "../ViewRecipeIngredientCard/ViewRecipeIngredientCard";

function ViewRecipe({ recipes, ingredients, findAssociatedIngredientToView, user }) {
  let { id } = useParams();
  console.log(user)

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
      <h1 className="recipe-name">{recipeToView.name}</h1>
      <img className="recipe-image" src={recipeToView.image} alt={recipeToView.name} />
      <h2 className="recipe-description">{recipeToView.description}</h2>
      <div>
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
      </div>
    </div>
  );
}

export default ViewRecipe;
