import React, { createContext, useState } from "react";
import productArray from "../data/productArray.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 
 const [products, setProducts] = useState(productArray);
 const [cart, setCart] = useState([])

 const defaultContext = {
  products, setProducts, cart, setCart
 }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
