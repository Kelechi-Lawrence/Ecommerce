import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "./CartContext"; // Import useCart
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cart } = useCart(); // Get the cart from Context
  // Calculate total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="Navbar-container">
      <div className="nav-logo">
        <HiOutlineShoppingBag className="shop-icon" />
        <p>SHOP-NG</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>

          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-cart">
        <button onClick={() => setMenu("login")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Login
          </Link>
        </button>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <LuShoppingCart className="cart-icon" />
        </Link>
        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
