import React, { createContext, useEffect, useState } from "react";

import productArray from "../data/productArray.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(productArray);
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [wishlist, setWishlist] = useState([])
  

  const globalAddToCart = (id) => {
    const findedItemCart = cart.find((item) => item.id === id);
    const newItemToAdd = products.find((item) => item.id === id);
    if (findedItemCart) {
      findedItemCart.quantity++;
      return setCart([...cart]);
    } else {
      newItemToAdd.quantity = 1;
      return setCart([...cart, newItemToAdd]);
    }
  };

  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    // console.log(registeredUsers);
if (registeredUsers) {
      setUser(registeredUsers);
    }
  }, []);
  //_____________________________________________________________________________________________
  //Wishlist Functionality
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  const globalAddToWishlist = (id) => {
    const findedItemCart = wishlist.find((item) => item.id === id);
    const newItemToAdd = products.find((item) => item.id === id);
    if (findedItemCart) {
      findedItemCart.quantity++;
      return setWishlist([...wishlist]);
    } else {
      newItemToAdd.quantity = 1;
      return setWishlist([...wishlist, newItemToAdd]);
    }
  };
  const deleteItemWishlist = (id) => {
    const filtredCart = wishlist.filter((product) => product.id !== id);
    setWishlist(filtredCart);
  };
  //_____________________________________________________________________________________________

  //Cart Functionality
  const deleteItemCart = (id) => {
    const filtredCart = cart.filter((product) => product.id !== id);
    setCart(filtredCart);
  };

  const incrementQuantity = (item) => {
    setCart(
      cart.map((product) => {
        if (item.id === product.id) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      })
    );
  };
  const decrementQuantity = (item) => {
    setCart(
      cart.map((product) => {
        if (item.id === product.id) {
          product.quantity--;
          return product;
        } else {
          return product;
        }
      })
    );
  };
  //_____________________________________________________________________________________________
  const defaultContext = {
    user,
    setUser,
    products,
    setProducts,
    cart,
    setCart,
    deleteItemCart,
    incrementQuantity,
    decrementQuantity,
    globalAddToCart,
    toggle,
    handleToggle,
    globalAddToWishlist,
    wishlist,
    deleteItemWishlist
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
