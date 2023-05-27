import { Link } from "react-router-dom";
import "../App/App.css";
import OrderedItem from "../OrderedItem/OrderedItem";

const OrderSummary = (props) => {
  const itemsNameInCart = props.itemsInCart.map((item) => item);

  const itemsObject = props.allItems.filter((item) =>
    itemsNameInCart.includes(item.name)
  );

  const totalPrice = itemsObject.reduce((acc, initial) => {
    return acc + initial.price;
  }, 0);

  const orderedItemsElement = itemsObject.map((item) => (
    <OrderedItem
      name={item.name}
      price={item.price}
      img={item.image}
      key={Math.random()}
      removeItem={props.removeItem}
    />
  ));

  return (
    <main className="summary-page">
      <Link to="/" className="back-btn">
        Continue Shopping
      </Link>
      <div className="orders-container">
        <h3 className="order-heading">Order Summary</h3>
        <div className="orders-card">
          {orderedItemsElement}
          <div className="orders-card-footer">
            <div className="card-footer-container">
              <p className="card-footer-text">Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="card-footer-container">
              <p className="card-footer-text">Shipping</p>
              <p>--</p>
            </div>
            <hr />
            <div className="card-footer-container">
              <p className="card-footer-text">Total(US)</p>
              <p className="total-price">${totalPrice.toFixed(2)}</p>
            </div>
            <Link to="/completed" onClick={() => props.resetCart()}>
              <button onClick={() => props.resetCart()} className="order-btn">
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
