import React, { useState } from "react";

function NewIngredientForm({ addNewIngredient }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then((newIngredient) => addNewIngredient(newIngredient));
  }

  return (
    <div className="new-ingredient">
      <h1 className="new-ingredient-header">Add Ingredient</h1>
      <form className="new-ingredient-form" onSubmit={handleSubmit}>
        <label>
          Ingredient Name
          <input
            type="text"
            name="ingredientName"
            placeholder="Ingredient Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Image
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <br />
        <input
          type="submit"
          className="new-ingredient-submit-button"
          value="Submit"
        ></input>
      </form>
    </div>
  );
}

export default NewIngredientForm;
