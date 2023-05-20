import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
import Category from "../Category/Category";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [sortedItems, setSortedItems] = useState({ value: "" });
  // console.log(setAllItems);

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
      <Navbar />

      <div className="main-content">
        <Category
          filterFunc={getFilteredItems}
          allItems={allItems}
          setFilteredItems={setFilteredItems}
        />
        <ItemList items={filteredItems} />
      </div>
    </main>
  );
}

export default App;
