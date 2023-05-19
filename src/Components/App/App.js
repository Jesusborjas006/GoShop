import { useState } from "react";
import "./App.css";
import itemsData from "../../data";
import ItemList from "../ItemList/ItemList";

function App() {
  const [items, setItems] = useState(itemsData);
  console.log(setItems);

  return (
    <main className="main">
      <ItemList items={items} />
    </main>
  );
}

export default App;
