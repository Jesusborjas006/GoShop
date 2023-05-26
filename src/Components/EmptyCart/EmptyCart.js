import "../App/App.css";
import { Link } from "react-router-dom";
import emptyCartImg from "../../images/empty-cart.svg";

const EmptyCart = () => {
  return (
    <div className="cart-card">
      <img className="empty-cart" src={emptyCartImg} alt="Empty cart" />
      <h3>Your GoShop Cart is empty</h3>
      <Link to={"/"} className="shop-link">
        Start shopping now
      </Link>
    </div>
  );
};

export default EmptyCart;
