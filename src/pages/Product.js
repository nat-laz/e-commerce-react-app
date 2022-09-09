import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../style/Product.css";
import { Carousel } from "antd";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { Rate } from "antd";
import {v4 as uuid} from 'uuid'
import toast, { Toaster } from "react-hot-toast";


export default function Product() {
  const ref = useRef();
  const location = useLocation();
  const { setCart, cart } = useContext(AppContext);

  const addToCart = () => {
    const findedItem = cart.find((item) => item.id === location.state.id);
    if (findedItem) {
      findedItem.quantity++;
      return setCart([...cart]);
    } else {
      location.state.quantity = 1;
      return setCart([...cart, location.state]);
    }
  };

  return (
    <div className="Product">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {location.state && (
        <div className="single-product-box">
          <div className="single-product-img-arrows">
            <VscArrowLeft
              className="carousel-btn"
              onClick={() => ref.current.prev()}
            />
            <div className="single-product-images-carousel">
              <Carousel
                autoplay
                pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
                ref={ref}
                effect="scrollx"
              >
                <img src={location.state.image} alt="" width={200} />
                {location.state.images.map(item=>
                  <img key={uuid()} src={item} alt="" width={200} />
                )}
              </Carousel>
            </div>
            <VscArrowRight
              className="carousel-btn"
              onClick={() => ref.current.next()}
            />
          </div>
          <div className="single-page-details">
            <h1>{location.state.category}</h1>
            <p>{location.state.title}</p>
            <h4>{location.state.price}€</h4>
            <div>
              {" "}
              <Rate
                style={{ color: "#5f7470" }}
                disabled
                defaultValue={location.state.rating.rate}
              />
              <sup style={{ color: "#5f7470" , marginLeft: "8px"}}>{location.state.rating.count}</sup>
            </div>
            <button onClick={()=>{addToCart(); toast("you added an item to your basket")}}>ADD TO CART</button>
            <h3>Description</h3>
            <p>{location.state.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
