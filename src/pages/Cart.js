import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../style/Cart.css";
import { IoMdClose } from "react-icons/io";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useEffect } from "react";

export default function Cart() {
  const { cart, deleteItemCart, incrementQuantity, decrementQuantity } =
    useContext(AppContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0);
    setTotal(sum);
  }, [cart]);

  return (
    <div className="Cart">
      {cart.map((item) => (
        <div key={uuid()} className="cart-product">
          <div className="cart-image">
            <img src={item.image} alt="" />
          </div>
          <div className="cart-description">
            <h2>{item.category.toUpperCase()}</h2>
            <p>{item.title.toLowerCase()}</p>
            <h3>{item.price} € </h3>
          </div>
          <div className="cart-buttons">
            <div>
              <IoMdClose
                onClick={() => deleteItemCart(item.id)}
                className="cart-delete-btn"
              />
            </div>
            <div className="cart-quantity-wrapper">
              <button
                disabled={item.quantity === 1}
                onClick={() => decrementQuantity(item)}
                className="increment-decrement-btn"
              >
                <MdRemove />
              </button>
              <div className="cart-quantity-num">{item.quantity}</div>
              <div className="increment-decrement-btn" onClick={() => incrementQuantity(item)}>
                {" "}
                <MdAdd />
              </div>
            </div>
          </div>
        </div>
      ))}
      <h2>
        TOTAL<span>{total.toFixed(2)} €</span>
      </h2>
      <button className="cart-order-btn">ORDER</button>
    </div>
  );
}
