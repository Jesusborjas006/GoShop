import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);
  console.log(setAllItems)

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => item.category === type);
    setFilteredItems(filtered);
  };

  return (
    <main className="main">
      <div className="filter-btn-container">
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
