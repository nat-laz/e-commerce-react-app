import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { NavLink} from "react-router-dom";
import "./Products.css";
import Pagination from "./Pagination.js";
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";


export default function Products() {
  const { products, globalAddToCart  } = useContext(AppContext);
  
  const [ currentPage, setCurrentPage] = useState(1);
 // console.log(currentPage);
  const [ productsPerPage] = useState(10);
//get Current Products
const indexOfLastProduct = (currentPage * productsPerPage);//6

const indexOfFirstProduct = indexOfLastProduct - productsPerPage;//1
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);//6

//change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <>
    <Toaster style={{border:"1px solid black",color:"black"}}/>


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
            <div style={{display:"flex"}}>
            <h2>{item.title}</h2>
            <p id="product-price">
              {`€ ${item.price}`}
              
            </p>
            {console.log(item.id)};
            <button className="chairs-addtocart" onClick={()=>{globalAddToCart(item.id); toast(`you added an item to your cart`)}}>< RiShoppingBasket2Line style ={{fontSize:"2em"}}/></button>
            </div>
          </div>
          </>
        );
      })}
      
    </div>
    <Pagination  productsPerPage={productsPerPage} totalPosts={products.length} paginate={paginate}/>

    
    </>
  );
}