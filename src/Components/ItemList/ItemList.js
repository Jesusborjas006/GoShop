import "../App/App.css";
import Item from "../Item/Item";

const ItemList = (props) => {
  const itemElements = props.items.map((item) => (
    <Item
      name={item.name}
      category={item.category}
      price={item.price}
      id={item.id}
      key={item.id}
    />
  ));

  return (
    <div className="items-container">
      {itemElements}
    </div>

  ) 
}

export default ItemList;
