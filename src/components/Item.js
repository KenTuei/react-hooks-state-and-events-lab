// components/Item.js
import React, { useState } from 'react';

const Item = ({ name }) => {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(prev => !prev);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <button onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
