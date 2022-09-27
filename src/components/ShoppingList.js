import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log("shoppniglist items: ", items)

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value)
  }

  const itemsToShow = items.filter(item => {
    if(selectedCategory === "All"){
      return true
    }else {
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToShow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;