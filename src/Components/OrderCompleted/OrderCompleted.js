import { Link } from "react-router-dom";
import completedOrder from "../../images/completed-order.svg";
import "../App/App.css";

const OrderCompleted = () => {
  return (
    <main className="order-completed-page">
      <div className="completed-card">
        <img
          className="completed-img"
          src={completedOrder}
          alt="Order complete"
        />
        <h3>Your order is completed!</h3>
        <Link to="/" className="explore-items-btn">
          Explore more items
        </Link>
      </div>
    </main>
  );
};

export default OrderCompleted;
