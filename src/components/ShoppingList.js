import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredShoppingList, setFilteredShoppingList] = useState(items);

  function dropdownChanged(event) {
    const filter = event.target.value;
    if (filter === 'All') {
      setFilteredShoppingList(items)
    } else {
      const newList = items.filter((item) => {
        return item.category === filter;
      });
      setFilteredShoppingList(newList)
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={dropdownChanged} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredShoppingList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
