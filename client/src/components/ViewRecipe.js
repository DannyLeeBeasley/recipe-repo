import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import RecipeIngredientCard from "./RecipeIngredientCard";
import RecipeIngredient from "./RecipeIngredientForm";

function ViewRecipe({ recipes, ingredients }) {
  let { id } = useParams();
  let history = useHistory();

  console.log(id)
  console.log(recipes)
  let recipeToView = recipes.find(recipe => recipe.id == id)
  console.log(recipeToView)

  const [name, setName] = useState(recipeToView.name);
  const [image, setImage] = useState(recipeToView.image);
  const [description, setDescription] = useState(recipeToView.description);
  
  let recipeToViewIngredientIds = recipeToView.ingredient_ids
  
  let recipeToViewIngredients = ingredients.filter(ingredient => recipeToViewIngredientIds.includes(ingredient.id))

  const [recipeIngredients, setRecipeIngredients] = useState(recipeToViewIngredients);

  return (
    <div>
      <h1>{recipeToView.name}</h1>
      <img src={recipeToView.image} alt={recipeToView.name}/>
      <h2>{recipeToView.description}</h2>
      <ul>
        {recipeIngredients.map((ingredient, i) => (
          <RecipeIngredientCard
            setRecipeIngredients={setRecipeIngredients}
            recipeIngredients={recipeIngredients}
            name={ingredient.name}
            ingredient={ingredient}
            key={i}
            ingredientIndex={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default ViewRecipe;
