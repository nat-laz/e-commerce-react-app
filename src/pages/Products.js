import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { NavLink} from "react-router-dom";
import "./Products.css";
import Pagination from "./Pagination.js";

export default function Products() {
  const { products  } = useContext(AppContext);
  console.log(products.length);
  const [ currentPage] = useState(1);
 // console.log(currentPage);
  const [ productsPerPage] = useState(6);
//get Current Products
const indexOfLastProduct = (currentPage * productsPerPage);

const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
    <div className="products-wrapper">
      {currentProducts.map((item) => {
        return (
          <>
          <div className="products-box " key={item.id}>
            <NavLink to={`/products/${item.id}`} state={item}>
              <img
                className="products-img"
                src={item.image}
                width={300}
                alt=""
              />
            </NavLink>
            <h2>{item.title}</h2>
            <p id="product-price">
              <sup>€ </sup>
              {item.price}{" "}
            </p>
          </div>
          </>
        );
      })}
      
    </div>
    <Pagination  productsPerPage={productsPerPage} totalPosts={products.length}/>

    
    </>
  );
}