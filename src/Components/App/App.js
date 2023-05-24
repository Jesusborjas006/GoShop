import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
import Category from "../Category/Category";
import Form from "../Form/Form";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => item.category === type);
    setFilteredItems(filtered);
  };

  return (
    <main className="main">
      <Navbar />

      <div className="main-content">
        <Category
          filterFunc={getFilteredItems}
          allItems={allItems}
          setFilteredItems={setFilteredItems}
        />
        <div className="right-content">
          <h3 className="total-products">
            {filteredItems.length} total products.
          </h3>
          <ItemList items={filteredItems} />
        </div>
      </div>
    </main>
  );
}

export default App;
