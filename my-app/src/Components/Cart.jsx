import React from "react";
import { useCart } from "./CartContext"; // Import the custom hook
import "../css/cart.css"; // Create this CSS file

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Get the cart from context

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)} // Call removeFromCart with item id
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>
          Grand Total: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
