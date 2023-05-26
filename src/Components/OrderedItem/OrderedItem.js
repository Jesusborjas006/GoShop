import "../App/App.css";

const OrderedItem = (props) => {
  return (
    <div className="ordered-item">
      <img className="cart-item-img" src={props.img} alt="Product"/>
      <div className="ordered-item-text">
      <p>{props.name}</p>
      <p>${props.price}</p>
      </div>
    </div>
  );
};

export default OrderedItem;
