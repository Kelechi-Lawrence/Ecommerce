import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductHead from "./ProductHead";
import menImage from "../assets/men1.png";
import womenImage from "../assets/women4.png";
import kidImage from "../assets/shopping.png";
import "../css/product.css";
import { useCart } from "./CartContext";

const Product = () => {
  const location = useLocation();
  const image =
    location.pathname === "/women"
      ? womenImage
      : location.pathname === "/kids"
      ? kidImage
      : menImage;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add to cart
    setShowAlert(true); // Show the alert
    setTimeout(() => setShowAlert(false), 1000); // Hide after 2 seconds
  };

  return (
    <div className="product-page">
      {/* Custom Alert */}
      {showAlert && <div className="custom-alert">Added successfully</div>}
      <div className="product-head-wrapper">
        <ProductHead image={image} />
      </div>

      <div className="product-container">
        <h2 className="product-title">Available Products</h2>
        {loading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-img"
                  />
                </Link>
                <h3 className="product-name">{product.title}</h3>
                <p className="product-price">Price: ${product.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
