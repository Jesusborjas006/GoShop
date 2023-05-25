import { Link } from "react-router-dom";
import "../App/App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">GoShop</h1>
      </Link>
      <Link to="/cart">
        <p className="cart">Cart</p>
      </Link>
    </nav>
  );
};

export default Navbar;
