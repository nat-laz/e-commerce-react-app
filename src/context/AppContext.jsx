import React, { createContext, useEffect, useState } from "react";
import productArray from "../data/productArray.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(productArray);
  const [cart, setCart] = useState([]);
/* 
  const initialState = {
    products:[],
    user: null,
    cart: [],
    registeredUsers: JSON.parse(localStorage.getItem("registeredUsers")) || [],
  }; */

  useEffect(()=>{
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    console.log(registeredUsers);
    
    if(registeredUsers){
      setUser(registeredUsers);
    }
    
  },[])


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
    )}

    const defaultContext = {
      products,
      setProducts,
      cart,
      setCart,
      deleteItemCart,
      incrementQuantity,
      decrementQuantity,
      user,
      setUser,
    };
   

    return (
      <AppContext.Provider value={defaultContext}>
        {children}
      </AppContext.Provider>
    );
  };


export { AppContext, AppContextProvider };
