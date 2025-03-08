import React from "react";
import "../css/ProductHead.css";

const ProductHead = ({ image }) => {
  return (
    <div className="product-cont">
      <div className="h-left">
        <h1>FLAT 50% OFF</h1>
        <h2>
          <span>12</span> Hours <span>12</span> Min
        </h2>
        <button>Explore</button>
      </div>
      <div className="h-right">
        <img src={image} alt="category-image" />
      </div>
    </div>
  );
};

export default ProductHead;
