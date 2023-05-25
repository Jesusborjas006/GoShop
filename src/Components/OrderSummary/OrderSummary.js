import "../App/App.css";
import OrderedItem from "../OrderedItem/OrderedItem";

const OrderSummary = (props) => {
  // const orderedItems = props.itemsInCart.map((item) => (
  //   <OrderedItem name={item} key={Math.random()} />
  //   ));

  const itemsNameInCart = props.itemsInCart.map((item) => item);
  console.log(itemsNameInCart);

  const itemsObject = props.allItems.filter((item) =>
    itemsNameInCart.includes(item.name)
  );

  const orderedItemsElement = itemsObject.map((item) => (
    <OrderedItem
      name={item.name}
      price={item.price}
      img={item.image}
      key={Math.random()}
    />
  ));
  console.log(itemsObject);

  return (
    <main className="summary-page">
      <div className="orders-container">
        <h3 className="order-heading">Order Summary</h3>
        <div className="orders-card">
          {orderedItemsElement}
          <div className="orders-card-footer">
            <div className="card-footer-container">
              <p className="card-footer-text">Subtotal</p>
              <p>$10.00</p>
            </div>
            <div className="card-footer-container">
              <p className="card-footer-text">Shipping</p>
              <p>--</p>
            </div>
            <hr />
            <div className="card-footer-container">
              <p className="card-footer-text">Total(US)</p>
              <p className="total-price">$10.00</p>
            </div>
            <button className="order-btn">Confirm Order</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
