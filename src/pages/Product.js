import React, { useContext, useRef,  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../style/Product.css";
import { Carousel } from "antd";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { Rate } from "antd";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";

export default function Product() {
  const ref = useRef();
  const { id } = useParams();
  const { setCart, cart, globalAddToWishlist, wishlist, products } =
    useContext(AppContext);
    const [product, setProduct] = useState(null);

    const addToCart = () => {
    const findedItem = cart.find((item) => item.id === product.id);
    if (findedItem) {
      findedItem.quantity++;
      return setCart([...cart]);
    } else {
      product.quantity = 1;
      return setCart([...cart, product]);
    }
  };
 
  useEffect(() => {
    const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
    console.log(singleProduct)
    setProduct(singleProduct);
  }, []);
// console.log(product)
// console.log(products)
  return (
    <div className="Product">
      <Toaster className="toaster-alert" />
      {product && (
        <div className="single-product-box">
          <div className="single-product-img-arrows">
            <VscArrowLeft
              className="carousel-btn"
              onClick={() => ref.current.prev()}
            />
            <div className="single-product-images-carousel">
              <div className="wishlist-btn">
                {wishlist.includes(product) ? (
                  <IoMdHeart
                    onClick={() => {
                      globalAddToWishlist(product.id);
                      toast(`ITEM WAS REMOVED FROM YOUR WISHLIST`);
                    }}
                  />
                ) : (
                  <IoMdHeartEmpty
                    onClick={() => {
                      globalAddToWishlist(product.id);
                      toast(`ITEM WAS ADDED TO YOUR WISHLIST`);
                    }}
                  />
                )}
              </div>
              <Carousel
                autoplay
                pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
                ref={ref}
                effect="scrollx"
              >
                <img src={product.image} alt="" width={200} />
                {product.images.map((item) => (
                  <img key={uuid()} src={item} alt="" width={200} />
                ))}
              </Carousel>
            </div>
            <VscArrowRight
              className="carousel-btn"
              onClick={() => ref.current.next()}
            />
          </div>
          <div className="single-page-details">
            <h1>{product.category}</h1>
            <p>{product.title}</p>
            <h4>{product.price}€</h4>
            <div>
              {" "}
              <Rate
                style={{ color: "#5f7470" }}
                disabled
                defaultValue={product.rating.rate}
              />
              <sup style={{ color: "#5f7470", marginLeft: "8px" }}>
                {product.rating.count}
              </sup>
            </div>
            <button
              onClick={() => {
                addToCart();
                toast(`ITEM WAS ADDED TO YOUR CART`);
              }}
            >
              ADD TO CART
            </button>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
