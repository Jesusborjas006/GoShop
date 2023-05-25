import "../App/App.css";
import OrderedItem from "../OrderedItem/OrderedItem";

const OrderSummary = (props) => {
  console.log(props.itemsInCart.length);

  const orderedItems = props.itemsInCart.map((item) => (
    <OrderedItem name={item} key={Math.random()} />
  ));

  return <div>{orderedItems}</div>;
};

export default OrderSummary;
