import React from "react";
import "./offers.css";
import exclusive from "../assets/exclusive.jpg";

const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p> only on best sellers product</p>
        <button> check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="offers-image" />
      </div>
    </div>
  );
};

export default Offers;
