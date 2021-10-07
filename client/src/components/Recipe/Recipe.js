import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

function Recipe({ recipe }) {
  return (
    <>
      <h1>{recipe.name}</h1>
      <img>{recipe.img}</img>
      <h3>{recipe.description}</h3>
      <ul className="">
        <li>recipe.ingredients.map((ingredient) => {
          return(
            
          );
          })</li>
      </ul>
    </>
  );
}

export default Recipe;
