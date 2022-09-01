import { Routes, Route } from "react-router-dom";
import React from "react";
import Container from "./components/contextAPI/Container.jsx";
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
<Container>
<div className="App">
    
    <Navbar />
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
 
</div>
</Container>
  );
}

export default App;
