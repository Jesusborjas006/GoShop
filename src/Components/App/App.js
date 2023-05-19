import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => {
      return item.category === type;
    });
    setFilteredItems(filtered);
  };

  return (
    <main className="main">
      <button
        onClick={() => getFilteredItems("technology")}
        className="category-btn"
      >
        Technology
      </button>
      <button
        onClick={() => getFilteredItems("pet supplies")}
        className="category-btn"
      >
        Pet Supplies
      </button>
      <button
        onClick={() => getFilteredItems("personal care")}
        className="category-btn"
      >
        Personal Care
      </button>
      <ItemList items={filteredItems} />
    </main>
  );
}

export default App;
