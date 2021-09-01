import React from "react";

function RecipeCard({ name, image, description }) {
  return (
    <li className="card">
      <h4>{name}</h4>
      <img src={image} alt={"recipe image"} />
      <p>{description}</p>
    </li>
  );
}

export default RecipeCard;
