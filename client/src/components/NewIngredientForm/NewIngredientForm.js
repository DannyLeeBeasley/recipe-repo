import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewIngredientForm.css";

function NewIngredientForm({ addNewIngredient }) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/ingredients", {
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
      .then((newIngredient) => {
        addNewIngredient(newIngredient);
        history.push("/ingredients");
      });
  }

  return (
    <div className="new-ingredient-container">
      <h1 className="new-ingredient-head">Add an Ingredient</h1>
      <form className="new-ingredient-form" onSubmit={handleSubmit}>
      <div className="new-ingredient-input-container">
        <label>
          Name:</label>
          <input
            className="new-ingredient-input"
            type="text"
            name="ingredientName"
            placeholder="Ingredient Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="new-ingredient-input-container">
        <label>
          Image:
          </label>
          <input
            className="new-ingredient-input"
            type="text"
            name="ingredientImage"
            placeholder="Google a JPG, right click, copy image address, paste here"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="new-ingredient-submit-button"
          value="Add New Ingredient"
        ></input>
      </form>
    </div>
  );
}

export default NewIngredientForm;
