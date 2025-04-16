// components/ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

// Sample items prop for example purposes
// Each item is assumed to have a name and category
// Example: [{ name: 'Apple', category: 'Produce' }, { name: 'Milk', category: 'Dairy' }]

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const itemsToDisplay = items.filter(item => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item, index) => (
          <Item key={index} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
