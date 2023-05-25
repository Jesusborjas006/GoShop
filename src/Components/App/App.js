import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
import Category from "../Category/Category";
import { Route } from "react-router-dom";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  console.log(setAllItems);
  const [filteredItems, setFilteredItems] = useState(allItems);

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => item.category === type);
    setFilteredItems(filtered);
  };

  return (
    <main className="main">
      <Navbar />

      <Route exact path="/">
        <div className="main-content">
          <Category
            filterFunc={getFilteredItems}
            allItems={allItems}
            setFilteredItems={setFilteredItems}
          />
          <div className="right-content">
            <h3 className="total-products">
              {filteredItems.length === 1
                ? "1 product"
                : `${filteredItems.length} total products`}
            </h3>
            <ItemList items={filteredItems} />
          </div>
        </div>
      </Route>

      <Route exact path="/cart">
        <h1>Cart</h1>
      </Route>
    </main>
  );
}

export default App;
