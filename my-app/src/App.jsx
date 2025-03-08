import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./Components/Shop";
import ShopCategory from "./Components/ShopCategory";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { CartProvider } from "./Components/CartContext"; // Import the provider

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Product />} />
          <Route path="/women" element={<Product />} />
          <Route path="/kids" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
