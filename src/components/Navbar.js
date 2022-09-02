import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  

  return (
    <ul style={{display:"flex", justifyContent:"space-around", listStyleType:"none",color:"black", textDecoration:"none",
    alignItems:"center"}}>
      <div>
        <img src={require("../images/furniture.png")} alt="" width="150" />
      </div>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      <li><Link to="/profile">Profile</Link></li>

    </ul>
  )
}
