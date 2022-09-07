import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Navbar.css";

export default function Navbar() {
  const { cart, user } = useContext(AppContext);
  return (
    <ul className="Navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={require("../images/furniture.png")} alt="" width="150" />
        </Link>
      </div>

      <div className="nav-links">
        <li>
          <Link to="/about">about</Link>
        </li>

        <li>
          <Link to="/cataloge">cataloge</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>

        <li>
          <Link to="/contactus">contact</Link>
        </li>
      </div>

      <div className="nav-log-cart">
        {user ? (
          <li>
            <Link to="/profile">{user.firstName.toUpperCase()}</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">LOG IN</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/cart">
            <RiShoppingCartLine /> <sup>{cart.length}</sup>
          </Link>
        </li>
      </div>
    </ul>
  );
}
