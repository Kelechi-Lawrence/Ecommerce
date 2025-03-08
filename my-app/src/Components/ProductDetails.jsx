import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../css/product-details.css";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-img"
      />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-category">Category: {product.category}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
