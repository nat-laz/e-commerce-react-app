import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { VscClose } from "react-icons/vsc";
import "../style/Wishlist.css";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const { wishlist, globalAddToCart, deleteItemWishlist } =
    useContext(AppContext);

  return (
    <div>
      <Toaster className="toaster-alert" />
      {wishlist.map((item) => (
        <div key={uuid()} className="wishlist-container">
          <div className="wishlist-img">
            <NavLink to={`/products/${item.id}`} state={item}>
              <img src={item.image} width={250} alt="" />
            </NavLink>
          </div>
          <div className="wishlist-details">
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>{`€${item.price}`}</p>
            <button
              onClick={() => {
                globalAddToCart(item.id);
                toast(`ITEM WAS ADDED TO YOUR CART`);
                deleteItemWishlist(item.id);
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div
            className="wishlist-remove"
            onClick={() => {
              deleteItemWishlist(item.id);
              toast(`ITEM WAS REMOVED FROM YOUR WISHLIST`);
            }}
          >
            <VscClose style={{ fontSize: "2em", fontWeight: "lighter" }} />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
