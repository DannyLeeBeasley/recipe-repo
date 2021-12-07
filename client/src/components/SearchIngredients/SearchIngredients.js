import React from "react";
import "./SearchIngredients.css";

function SearchIngredients({ searchTerm, onSearchChange }) {
  return (
    <div className="search-ingredient-container">
      <label htmlFor="search">Search Ingredients:</label>
      <input
        type="text"
        id="search"
        placeholder="Type ingredient name to search..."
        value={searchTerm}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchIngredients;
