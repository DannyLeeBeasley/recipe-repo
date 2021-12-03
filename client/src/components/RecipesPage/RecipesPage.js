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
import "./RecipesPage.css";

function RecipesPage({ user, setUser }) {
  console.log(user);
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(() => {
    fetch("/ingredients")
      .then((r) => r.json())
      .then((ingredientsArr) => setIngredients(ingredientsArr));
  }, []);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((recipesArr) => {
        setRecipes(recipesArr);
      });
  }, []);

  useEffect(() => {
    fetch("/recipe_ingredients")
      .then((r) => r.json())
      .then((recipeIngredientsArr) => {
        setRecipeIngredients(recipeIngredientsArr);
      });
  }, []);

  const unitList = ["Tsp", "Tbls", "C", "Cloves", "Oz", "Lbs"];

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
      .then(() => console.log("The Ingredient You Added Was Deleted"));
  }

  function handleDeleteRecipe(recipeToDeleteId) {
    fetch(`/recipes/${recipeToDeleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => alert("Your Recipe has been deleted"));
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeToDeleteId));
  }

  function updateRecipe(recipeToUpdate) {
    const recipesNotToUpdate = recipes.filter(
      (recipe) => recipe.id != recipeToUpdate.id
    );
    const updatedRecipeArray = [...recipesNotToUpdate, recipeToUpdate];
    setRecipes(updatedRecipeArray);
  }

  function findAssociatedIngredientToView(recipeIngredient) {
    let foundAssociatedIngredient = ingredients.find(
      (ingredient) => ingredient.id == recipeIngredient.ingredient_id
    );
    return foundAssociatedIngredient;
  }

  function findAssociatedIngredientNewRecipe(recipeIngredient) {
    // console.log(ingredients);
    // console.log(recipeIngredient);
    let foundAssociatedIngredient = ingredients.find(
      (ingredient) =>
        ingredient.id == (recipeIngredient.ingredient_id || recipeIngredient.id)
    );
    return foundAssociatedIngredient;
  }

  function findAssociatedIngredientToUpdate(recipeIngredient) {
    // console.log(ingredients);
    // console.log(recipeIngredient);
    let foundAssociatedIngredient = ingredients.find(
      (ingredient) =>
        ingredient.id == (recipeIngredient.ingredient_id || recipeIngredient.id)
    );
    return foundAssociatedIngredient;
  }

  return (
    <Router>
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Route exact path="/">
        <RecipeList
          user={user}
          recipes={recipes}
          handleDeleteRecipe={handleDeleteRecipe}
        />
      </Route>
      <Route exact path="/newrecipe">
        <NewRecipeForm
          user={user}
          ingredients={ingredients}
          recipes={recipes}
          unitList={unitList}
          findAssociatedIngredientNewRecipe={findAssociatedIngredientNewRecipe}
          addNewRecipe={addNewRecipe}
        />
      </Route>
      <Route exact path="/ingredients">
        <IngredientList
          user={user}
          ingredients={ingredients}
          handleDeleteIngredient={handleDeleteIngredient}
        />
      </Route>
      <Route exact path="/newingredient">
        <NewIngredientForm addNewIngredient={addNewIngredient} user={user} />
      </Route>
      <Route path="/updaterecipe/:id">
        <UpdateRecipeForm
          user={user}
          ingredients={ingredients}
          recipes={recipes}
          recipeIngredients={recipeIngredients}
          unitList={unitList}
          updateRecipe={updateRecipe}
          findAssociatedIngredientToUpdate={findAssociatedIngredientToUpdate}
          setRecipeIngredients={setRecipeIngredients}
        />
      </Route>
      <Route path="/viewrecipe/:id">
        <ViewRecipe
          user={user}
          recipes={recipes}
          ingredients={ingredients}
          recipeIngredients={recipeIngredients}
          updateRecipe={updateRecipe}
          findAssociatedIngredientToView={findAssociatedIngredientToView}
        />
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
