import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar.js";
import ContactUs from "./pages/ContactUs.js";
import NotFound from "./pages/NotFound.js";
import Product from "./pages/Product.js";
import Products from "./pages/Products.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />

         <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
