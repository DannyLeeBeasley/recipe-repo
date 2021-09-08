import React, { useEffect, useState } from "react";
import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import NewIngredientForm from "./NewIngredientForm";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router-dom/cjs/react-router-dom.min";
// import Search from "./Search";

function RecipesPage(){

    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch('/ingredients')
        .then( r => r.json() )
        .then( ingredientsArr => setIngredients(ingredientsArr) );
    }, [])
    
    useEffect(() => {
        fetch('/recipes')
        .then( r => r.json() )
        .then( recipesArr => setRecipes(recipesArr) );
    }, [])

    function addNewIngredient(newIngredient) {
        const updatedIngredientsArray = [...ingredients, newIngredient];
        setIngredients(updatedIngredientsArray);
      }

    return(
        <main>
            <Router>
                <Route path="/">
                    <RecipeList recipes={recipes}/>
                </Route>
                <Route path="/addrecipe">
                    <NewRecipeForm ingredients={ingredients}/>
                </Route>
            <NewIngredientForm addNewIngredient={addNewIngredient}/>
            <IngredientList ingredients={ingredients}/>
            </Router>
        </main>
    );
}

export default RecipesPage;