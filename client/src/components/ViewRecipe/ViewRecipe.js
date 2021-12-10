import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ViewRecipeIngredientCard from "../ViewRecipeIngredientCard/ViewRecipeIngredientCard";
import "./ViewRecipe.css";

function ViewRecipe({
  recipes,
  ingredients,
  findAssociatedIngredientToView,
  user,
  ingredientsLoaded,
  recipesLoaded,
  recipeIngredientsLoaded,
}) {
  let { id } = useParams();
  console.log(user);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let recipeToView = recipes.find((recipe) => recipe.id == id);
  console.log(recipeToView);

  const [recipeToViewRecipeIngredients, setRecipeToViewRecipeIngredients] =
    useState(recipeToView?.recipe_ingredients);
  console.log(recipeToViewRecipeIngredients);

  let recipeToViewRecipeIngredientsIngredientIds =
    recipeToViewRecipeIngredients?.map(
      (recipeToViewRecipeIngredient) =>
        recipeToViewRecipeIngredient?.ingredient_id
    );
  console.log(recipeToViewRecipeIngredientsIngredientIds);

  const [recipeToViewIngredients, setRecipeToViewIngredients] = useState(
    ingredients?.filter((ingredient) =>
      recipeToViewRecipeIngredientsIngredientIds?.includes(ingredient.id)
    )
  );
  console.log(recipeToViewIngredients);

  if (!ingredientsLoaded || !recipesLoaded || !recipeIngredientsLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="view-recipe-container">
      <h1 className="view-recipe-name">{recipeToView.name}</h1>
      <div className="view-recipe-content">
        <img
          className="view-recipe-image"
          src={recipeToView.image}
          alt={recipeToView.name}
        />
        <p className="view-recipe-description">{recipeToView.description}</p>
      </div>
      <div className="view-recipe-ingredients">
        {recipeToViewRecipeIngredients?.map(
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
      <p className="view-recipe-instructions">{recipeToView.instructions}</p>
    </div>
  );
}

export default ViewRecipe;
