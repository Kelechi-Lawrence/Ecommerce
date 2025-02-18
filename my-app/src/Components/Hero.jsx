import React from "react";
import firstImage from "../assets/shopping.png";

import { IoIosArrowDown } from "react-icons/io";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> CLOTHING</h2>
        <div className="you">
          <h2>FOR YOU</h2>
        </div>
        <div className="hero-latest-btn">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="hero-right">
        <img src={firstImage} alt="first" />
      </div>
    </div>
  );
};

export default Hero;
