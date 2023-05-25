import "../App/App.css";
import OrderedItem from "../OrderedItem/OrderedItem";

const OrderSummary = (props) => {
  console.log(props.itemsInCart.length);

  const orderedItems = props.itemsInCart.map((item) => (
    <OrderedItem name={item} key={Math.random()} />
  ));

  return (
    <main className="summary-page">
      <div className="orders-container">
        <h3 className="order-heading">Order Summary</h3>
        <div className="orders-card">
          {orderedItems}
          <div className="orders-card-footer">
            <div>
              <p>Subtotal</p>
            </div>
            <div>
              <p>Shipping</p>
            </div>
            <hr />
            <div>
              <p>Total(US)</p>
            </div>
            <button>Confirm Order</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
