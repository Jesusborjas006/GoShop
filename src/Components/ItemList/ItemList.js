import "../App/App.css";
import Item from "../Item/Item";

const ItemList = (props) => {
  const itemElements = props.items.map((item) => (
    <Item
      name={item.name}
      category={item.category}
      price={item.price}
      img={item.image}
      id={item.id}
      key={item.id}
      addToCart={props.addToCart}
      itemsAdded={props.itemsAdded}
    />
  ));

  return <div className="items-container">{itemElements}</div>;
};

export default ItemList;
