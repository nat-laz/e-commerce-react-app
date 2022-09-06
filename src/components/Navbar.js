import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const {cart} = useContext(AppContext)
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        listStyleType: "none",
        color: "black",
        textDecoration: "none",
        alignItems: "center",
      }}
    >
      <div>
       <Link to="/"><img src={require("../images/furniture.png")} alt="" width="150" /></Link>
      </div>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart <sup>{cart.length}</sup></Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
}
