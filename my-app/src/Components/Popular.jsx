import React from "react";
import Item from "../Components/Items";
import products from "../Components/data-set";
import "./popular.css";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.name}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
