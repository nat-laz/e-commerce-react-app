import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { VscClose } from "react-icons/vsc";
import "../style/Wishlist.css";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const { wishlist, globalAddToCart, deleteItemWishlist } =
    useContext(AppContext);

  return (
    <div>
      <Toaster
        style={{ border: "1px solid black", color: "black", padding: "12px" }}
      />
      {wishlist.map((item) => (
        <div className="wishlist-container">
          <div className="wishlist-img">
            <img src={item.image} width={250} alt="" />
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
            onClick={() => deleteItemWishlist(item.id)}
          >
            <VscClose style={{ fontSize: "2em" , fontWeight: "lighter"}} />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
