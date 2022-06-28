import React, { useState } from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  
  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={() => {
          setIsAddedToCart(!isAddedToCart)
        }}
        className={isAddedToCart ? "remove" : "add"} >
        {isAddedToCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
