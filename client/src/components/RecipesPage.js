import React, { useEffect, useState } from "react";
// import NewPlantForm from "./NewPlantForm";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
// import Search from "./Search";

function RecipesPage(){

    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch('/ingredients')
        .then( r => r.json() )
        .then( ingredientsArr => setIngredients(ingredientsArr) );
    }, [])
    
    // useEffect(() => {
    //     fetch('/recipes')
    //     .then( r => r.json() )
    //     .then( recipesArr => setRecipes(recipesArr) );
    // }, [])

    return(
        <main>
            <IngredientList ingredients={ingredients}/>
            <RecipeList recipes={recipes}/>
        </main>
    );
}

export default RecipesPage;