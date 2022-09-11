import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import "./style/Navbar.css";
import NotFound from "./pages/NotFound.js";
import Product from "./pages/Product.js";
import Products from "./pages/Products.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Cataloge from "./pages/Cataloge.js";
import Chairs from "./pages/Chairs.js";
import Tables from "./pages/Tables.js";
import Lamps from "./pages/Lamps.js";
import Bookcase from "./pages/Bookcase.js";
import { AppContext } from "./context/AppContext";
import Footer from "./pages/Footer.js";
import About from "./pages/About.js";
import { RiHeartLine, RiUser3Line } from "react-icons/ri";
import "./App.css";

function App() {
  const { cart, user, wishlist } = useContext(AppContext);
  return (
    <>
      <div className="App">
        <div className="main">
          <div className="Navbar">
            <div className="nav-logo">
              <Link to="/">
                <img
                  src={require("./assets/logo/iHaveThis.png")}
                  alt="logoSvg"
                />
              </Link>
            </div>

            <div
        
              className="nav-links"
            >
              <div className="nav-links titles1">
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/cataloge">CATALOGUE</Link>
                </li>
                <li>
                  <Link to="/products">PRODUCTS</Link>
                </li>
                <li>
                  <a href="#contactme">CONTACT</a>
                </li>
              </div>
            </div>

            <div className="nav-log-cart">
              {user ? (
                <li>
                  <Link to="/profile"><RiUser3Line/> </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">LOG IN</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/profile">
                  <RiHeartLine /> <sup>{wishlist.length}</sup>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <RiShoppingCartLine /> <sup>{cart.length}</sup>
                </Link>
              </li>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cataloge" element={<Cataloge />} />
            <Route path="/chairs" element={<Chairs />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/lamps" element={<Lamps />} />
            <Route path="/bookcase" element={<Bookcase />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <div id="contactme">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
