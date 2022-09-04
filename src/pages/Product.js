import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Product() {
  const { products } = useContext(AppContext);
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
    setProduct(singleProduct);
  }, []);
  //  console.log(product)
  return (
    <div>
      <h1>single product page</h1>
      <img src={product.image} alt="" width={200} />
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
    </div>
  );
}
