import React, { useState } from "react";

function UpdateRecipeForm({ updateRecipe, recipe, user }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [selectedIngredientId, setSelectedIngredientId] = useState(0);

  function handleAddClick() {
    if (selectedIngredientId === 0) return;
    setRecipeIngredients([
      ...recipeIngredients,
      ingredients.find((ingredient) => ingredient.id === selectedIngredientId),
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // user_id: user.id,
        name: name,
        image: image,
        description: description,
        ingredient_ids: recipeIngredients.map((ingredient) => {
          return ingredient.id;
        }),
      }),
    })
      .then((res) => res.json())
      .then((updatedRecipe) => updateRecipe(updatedRecipe));
  }
  return (
    <div className="update-recipe-form">
      <h1 className="update-recipe-form-head">Update Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name
          <input
            type="text"
            name="updatedRecipeName"
            placeholder="New Recipe Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Recipe Image
          <input
            type="text"
            name="recipeImage"
            placeholder="Recipe Image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Description
          <input
            type="text"
            name="recipeDescription"
            placeholder="Brief Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>
        <select
          name="ingredient"
          value={selectedIngredientId}
          onChange={(e) => {
            setSelectedIngredientId(Number(e.target.value));
          }}
        >
          <option>-Select Ingredient-</option>
          {ingredients.map((ingredient) => {
            return <option value={ingredient.id}>{ingredient.name}</option>;
          })}
        </select>
        <input
          type="button"
          value="Add Ingredient"
          onClick={handleAddClick}
        ></input>
        <div className="new-recipe-body">
          {recipeIngredients.map((ingredient, i) => (
            <RecipeIngredientCard
              // handleRemoveClick={handleRemoveClick}
              setRecipeIngredients={setRecipeIngredients}
              recipeIngredients={recipeIngredients}
              name={ingredient.name}
              ingredient={ingredient}
              key={i}
              ingredientIndex={i}
            />
          ))}
        </div>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

function RecipeIngredientCard({ ingredient, recipeIngredients, setRecipeIngredients, ingredientIndex }) {
  function handleRemoveClick() {
    const list = [...recipeIngredients];
    list.splice(ingredientIndex, 1);
    setRecipeIngredients(list);
  }
  return (
    <div className="new-recipe-card">
      <div>
        <img
          className="new-recipe-ingredient-img"
          alt={ingredient.name}
          src={ingredient.image}
        ></img>
      </div>

      <div className="new-recipe-card-name">{ingredient.name}</div>
      <input
        type="button"
        value="Remove Ingredient"
        onClick={() => handleRemoveClick()}
      ></input>
    </div>
  );
}

export default UpdateRecipeForm;