import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Product() {
  const location = useLocation();

  const {  setCart, cart } = useContext(AppContext);
  // const { id } = useParams();
  // const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
  // // // console.log(id);
  // // const [product, setProduct] = useState({});

  // // useEffect(() => {
  // //   const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
  // //   setProduct(singleProduct);
  // // }, []);
  // // //  console.log(product)
 const addToCart = () => {

    setCart([...cart, location.state])
 }

  return (
    <div>
      <h1>single product page</h1>
      {location.state && (
        <>
          {" "}
          <img src={location.state.image} alt="" width={200} />
          <h1>{location.state.title}</h1>
          <h3>{location.state.description}</h3>
          <button onClick={addToCart}>add to cart</button>
        </>
      )}
    </div>
  );
}
