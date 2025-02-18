import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./Components/Shop";
import ShopCategory from "./Components/ShopCategory";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Product />} />
        <Route path="/women" element={<ShopCategory />} />
        <Route path="/kids" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
