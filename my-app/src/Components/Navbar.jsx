import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="Navbar-container">
      <div className="nav-logo">
        <HiOutlineShoppingBag className="shop-icon" />
        <p>SHOP-NG</p>
      </div>

      {/* Navigation Menu */}
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
        <button>
          <Link to="/login"></Link> Login
        </button>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <LuShoppingCart className="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
