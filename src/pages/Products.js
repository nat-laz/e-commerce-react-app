import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import "../style/Products.css";
import Pagination from "./Pagination.js";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { Card } from "antd";
const { Meta } = Card;

export default function Products() {
  const { products, globalAddToCart, globalAddToWishlist, wishlist } =
    useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const [productsPerPage] = useState(9);
  //get Current Products
  const indexOfLastProduct = currentPage * productsPerPage; //6

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //1
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); //6

  //change page
  const paginate = (pageNumber) => {setCurrentPage(pageNumber, window.scrollTo(0,0))};

  return (
    <>
      <Toaster
        style={{ border: "1px solid black", color: "black", padding: "12px" }}
      />

      <div className="products-wrapper">
        {currentProducts.map((item) => {
          return (
            <div className="products-box " key={item.id}>
              <div className="wishlist-btn">
                {wishlist.includes(item) ? (
                  <IoMdHeart
                    onClick={() => {
                      globalAddToWishlist(item.id);
                      toast(`ITEM WAS REMOVED FROM YOUR WISHLIST`);
                    }}
                  />
                ) : (
                  <IoMdHeartEmpty
                    onClick={() => {
                      globalAddToWishlist(item.id);
                      toast(`ITEM WAS ADDED TO YOUR WISHLIST`);
                    }}
                  />
                )}
              </div>
              <Card
                hoverable
                bordered={false}
                style={{ width: 350 }}
                cover={
                  <NavLink to={`/products/${item.id}`} state={item}>
                    <img
                      className="products-img"
                      src={item.image}
                      width={300}
                      alt=""
                    />
                  </NavLink>
                }
              >
                <div className="products-details">
                  <Meta
                    style={{ marginLeft: "-23px", padding: "5px" }}
                    title={item.title}
                  />
                  <button
                    className={`chairs-addtocart product-price`}
                    onClick={() => {
                      globalAddToCart(item.id);
                      toast(`ITEM WAS ADDED TO YOUR CART`);
                    }}
                  >
                    <span> {`€${item.price}`}</span>
                    <RiShoppingBasket2Line
                      style={{ fontSize: "1.6em" }}
                      className="products-btn"
                    />
                  </button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
}
