import React from 'react'
import { useLocation } from "react-router-dom";



export default function Product({ products }) {
 
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>single product page</h1>
      <img src={location.products.image} alt="" width={200} />
      <h1>{location.products.title}</h1>
      <h3>{location.products.description}</h3>
    </div>
  );
};

  

