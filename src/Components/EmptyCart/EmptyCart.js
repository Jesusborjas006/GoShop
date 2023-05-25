import "../App/App.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart-card">
      <h3>Your GoShop Cart is empty</h3>
      <Link to="/" className="shop-link">
        Start shopping now
      </Link>
    </div>
  );
};

export default EmptyCart;
