import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [sortedItems, setSortedItems] = useState({ value: "" });

  console.log("all items state<>>", allItems);

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => item.category === type);
    setFilteredItems(filtered);
  };

  const handleChange = (event) => {
    setSortedItems({ value: event.target.value });
  };

  if (sortedItems.value === "Low") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortedItems.value === "High") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="main">
      <div className="filter-btn-container">
        <form>
          <select value={sortedItems.value} onChange={handleChange}>
            <option value="">Sort By</option>
            <option value="Low">Price (Low to High)</option>
            <option value="High">Price (High to Low)</option>
          </select>
        </form>
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
        {filteredItems.length <= 3 && (
          <button
            onClick={() => setFilteredItems(allItems)}
            className="category-btn"
          >
            Show All
          </button>
        )}
      </div>

      <ItemList items={filteredItems} />
    </main>
  );
}

export default App;
