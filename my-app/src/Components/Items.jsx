import React from "react";
import "../css/item.css";

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="image" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="new-item-prices">${props.new_price}</div>
        <div className="old-item-prices">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
