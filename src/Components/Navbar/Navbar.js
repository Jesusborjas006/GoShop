import { Link } from "react-router-dom";
import "../App/App.css";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">GoShop</h1>
      </Link>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge
            sx={{
              "& .MuiBadge-badge": { fontSize: 18, height: 22, minWidth: 22 },
            }}
            badgeContent={1}
            color="secondary"
          >
            <ShoppingCartIcon
              sx={{
                fontSize: "2rem",
              }}
            />
          </Badge>
        </IconButton>
      </Link>
    </nav>
  );
};

export default Navbar;
