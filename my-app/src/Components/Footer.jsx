import React from "react";
import "../css/footer.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="nav-logo">
        <HiOutlineShoppingBag className="shop-icon" />
        <p>SHOP-NG</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>Company</li>
          <li>Product</li>
          <li>About</li>
          <li>Offices</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>😁</li>
          <li>😁</li>
          <li>😁</li>
        </ul>
      </div>
      <div className="copyright">
        <hr />
        <p style={{ paddingTop: "20px", textAlign: "center" }}>
          Copyright @ 2025 -All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
