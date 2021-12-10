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
import LoggedOutPage from "../LoggedOutPage/LoggedOutPage";
import "./RecipesPage.css";

function RecipesPage({ user, setUser }) {
  
  const [recipes, setRecipes] = useState([]);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoaded, setIngredientsLoaded] = useState(false);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeIngredientsLoaded, setRecipeIngredientsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const unitList = ["C", "Cloves", "Handful", "Lbs", "Oz", "Tsp", "Tbls"];

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersArr) => {
        setUsers(usersArr);
        setUsersLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/ingredients")
      .then((r) => r.json())
      .then((ingredientsArr) => {
        setIngredients(ingredientsArr);
        setIngredientsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((recipesArr) => {
        setRecipes(recipesArr);
        setRecipesLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/recipe_ingredients")
      .then((r) => r.json())
      .then((recipeIngredientsArr) => {
        setRecipeIngredients(recipeIngredientsArr);
        setRecipeIngredientsLoaded(true);
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

  function updateRecipe(recipeToUpdate) {
    const recipesNotToUpdate = recipes.filter(
      (recipe) => recipe.id != recipeToUpdate.id
    );
    const updatedRecipeArray = [...recipesNotToUpdate, recipeToUpdate];
    setRecipes(updatedRecipeArray);
  }

  function deleteIngredient(ingredientToDelete) {
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

  function deleteRecipe(recipeToDeleteId) {
    fetch(`/recipes/${recipeToDeleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => alert("Your Recipe has been deleted"));
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeToDeleteId));
  }

  function findAssociatedIngredient(recipeIngredient) {
    let foundAssociatedIngredient = ingredients.find(
      (ingredient) => ingredient.id == recipeIngredient.ingredient_id
    );
    return foundAssociatedIngredient;
  }

  if (
    !usersLoaded ||
    !ingredientsLoaded ||
    !recipesLoaded ||
    !recipeIngredientsLoaded
  ) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Route exact path="/">
        <RecipeList
          user={user}
          recipes={recipes}
          users={users}
          usersLoaded={usersLoaded}
          ingredientsLoaded={ingredientsLoaded}
          recipesLoaded={recipesLoaded}
          recipeIngredientsLoaded={recipeIngredientsLoaded}
          deleteRecipe={deleteRecipe}
        />
      </Route>
      <Route exact path="/newrecipe">
        <NewRecipeForm
          user={user}
          ingredients={ingredients}
          recipes={recipes}
          unitList={unitList}
          usersLoaded={usersLoaded}
          ingredientsLoaded={ingredientsLoaded}
          recipesLoaded={recipesLoaded}
          recipeIngredientsLoaded={recipeIngredientsLoaded}
          findAssociatedIngredient={findAssociatedIngredient}
          addNewRecipe={addNewRecipe}
        />
      </Route>
      <Route exact path="/ingredients">
        <IngredientList
          user={user}
          ingredients={ingredients}
          usersLoaded={usersLoaded}
          ingredientsLoaded={ingredientsLoaded}
          recipesLoaded={recipesLoaded}
          recipeIngredientsLoaded={recipeIngredientsLoaded}
          deleteIngredient={deleteIngredient}
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
          usersLoaded={usersLoaded}
          ingredientsLoaded={ingredientsLoaded}
          recipesLoaded={recipesLoaded}
          recipeIngredientsLoaded={recipeIngredientsLoaded}
          updateRecipe={updateRecipe}
          findAssociatedIngredient={findAssociatedIngredient}
          setRecipeIngredients={setRecipeIngredients}
        />
      </Route>
      <Route path="/viewrecipe/:id">
        <ViewRecipe
          user={user}
          recipes={recipes}
          ingredients={ingredients}
          recipeIngredients={recipeIngredients}
          usersLoaded={usersLoaded}
          ingredientsLoaded={ingredientsLoaded}
          recipesLoaded={recipesLoaded}
          recipeIngredientsLoaded={recipeIngredientsLoaded}
          updateRecipe={updateRecipe}
          findAssociatedIngredient={findAssociatedIngredient}
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
      <Route exact path="/loggedout">
        <LoggedOutPage />
      </Route>
    </Router>
  );
}

export default RecipesPage;
