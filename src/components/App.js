import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const buttonValue = inCart ? "Remove From Cat" : "Add to Cart"
  const buttonClass = inCart ? "in-cart" : "add"

  function toggleInCart(){
    setInCart(!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleInCart}>{buttonValue}</button>
    </li>
  );
}

export default Item;