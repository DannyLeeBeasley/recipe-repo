import React, { useEffect, useState } from "react";
// import NewPlantForm from "./NewPlantForm";
import RecipeList from "./RecipeList";
// import Search from "./Search";

function RecipesPage(){

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('')
        .then( r => r.json() )
        .then( recipesArr => setRecipes(recipesArr) );
    }, [])

    return(
        <main>
            <RecipeList recipes={recipes}/>
        </main>
    );
}

export default RecipesPage;