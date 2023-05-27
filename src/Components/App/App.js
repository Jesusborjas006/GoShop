import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
import Category from "../Category/Category";
import { Route } from "react-router-dom";
import OrderSummary from "../OrderSummary/OrderSummary";
import EmptyCart from "../EmptyCart/EmptyCart";
import OrderCompleted from "../OrderCompleted/OrderCompleted";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [itemsAdded, setItemsAdded] = useState([]);

  const getFilteredItems = (type) => {
    const filtered = allItems.filter((item) => item.category === type);
    setFilteredItems(filtered);
  };

  const addToCart = (item) => {
    setItemsAdded((prevArray) => [...prevArray, item]);
  };

  const resetCart = () => {
    setItemsAdded([]);
  };

  return (
    <main className="main">
      <Navbar numOfItems={itemsAdded} />

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
            <ItemList
              items={filteredItems}
              addToCart={addToCart}
              itemsAdded={itemsAdded}
            />
          </div>
        </div>
      </Route>

      <Route exact path="/cart">
        <div className="main-cart-page">
          {itemsAdded.length === 0 ? (
            <EmptyCart />
          ) : (
            <OrderSummary
              itemsInCart={itemsAdded}
              allItems={allItems}
              resetCart={resetCart}
            />
          )}
        </div>
      </Route>

      <Route path="/completed">
        <OrderCompleted />
      </Route>
    </main>
  );
}

export default App;
