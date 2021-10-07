import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import NewRecipeForm from "../NewRecipeForm/NewRecipeForm";
import RecipeList from "../RecipeList/RecipeList";
import IngredientList from "../IngredientList/IngredientList";
import NewIngredientForm from "../NewIngredientForm/NewIngredientForm";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import UpdateRecipeForm from "../UpdateRecipeForm/UpdateRecipeForm";
import NewUserPage from "../NewUserPage/NewUserPage";
import ViewRecipe from "../ViewRecipe/ViewRecipe";
import AboutPage from "../AboutPage/AboutPage";


// import Search from "./Search";

function RecipesPage({ user, setUser }) {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("/ingredients")
      .then((r) => r.json())
      .then((ingredientsArr) => setIngredients(ingredientsArr));
  }, []);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((recipesArr) => {
        console.log("recipesArr", recipesArr);
        setRecipes(recipesArr);
      });
  }, []);

  function addNewIngredient(newIngredient) {
    const updatedIngredientsArray = [...ingredients, newIngredient];
    setIngredients(updatedIngredientsArray);
  }

  function addNewRecipe(newRecipe) {
    const updatedRecipeArray = [...recipes, newRecipe];
    setRecipes(updatedRecipeArray);
  }

  function handleDeleteIngredient(ingredientToDelete) {
    const updatedIngredientsArray = [...ingredients].filter(
      (ingredient) => ingredient.id !== ingredientToDelete.id
    );
    setIngredients(updatedIngredientsArray);

    fetch(`/ingredients/${ingredientToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => console.log("item deleted"));
  }

  function handleDeleteRecipe(recipeToDeleteId) {
    fetch(`/recipes/${recipeToDeleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => alert("Your Recipe has been deleted"));
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeToDeleteId));
  }

  function updateRecipe(recipeToUpdate){
    const recipesNotToUpdate = recipes.filter(recipe => recipe.id != recipeToUpdate.id)
    const updatedRecipeArray = [...recipesNotToUpdate, recipeToUpdate];
    setRecipes(updatedRecipeArray);
  }

  return (
      <Router>
        <Header />
        <NavBar />
        <Route exact path="/">
          <RecipeList
            recipes={recipes}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        </Route>
        <Route exact path="/newrecipe">
          <NewRecipeForm
            ingredients={ingredients}
            addNewRecipe={addNewRecipe}
          />
        </Route>
        <Route exact path="/ingredients">
          <IngredientList
            ingredients={ingredients}
            handleDeleteIngredient={handleDeleteIngredient}
          />
        </Route>
        <Route exact path="/newingredient">
          <NewIngredientForm addNewIngredient={addNewIngredient} />
        </Route>
        <Route path="/updaterecipe/:id">
          <UpdateRecipeForm ingredients={ingredients} recipes={recipes} updateRecipe={updateRecipe}/>
        </Route>
        <Route path="/viewrecipe/:id">
          <ViewRecipe ingredients={ingredients} recipes={recipes} updateRecipe={updateRecipe}/>
        </Route>
        <Route exact path="/signin">
          <LoginPage setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <NewUserPage setUser={setUser} />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Router>
  );
}

export default RecipesPage;
