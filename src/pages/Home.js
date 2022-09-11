import React, { useContext } from "react";
import "../style/Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Carousel, { consts } from "react-elastic-carousel";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { Card } from "antd";
const { Meta } = Card;

export default function Home() {
  const navigate = useNavigate();
  const { products, globalAddToWishlist, wishlist } = useContext(AppContext);

  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <img
          src={require("../assets/arrows/icons8-left-48.png")}
          alt="example"
          width={35}
          style={{ marginRight: "-12px" }}
        />
      ) : (
        <img
          src={require("../assets/arrows/icons8-right-48.png")}
          alt="example"
          width={35}
          style={{ marginLeft: "-20px" }}
        />
      );

    return (
      <button id="home-arrows-carousel" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];

      // Swap
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  let shuffledProds = shuffle(products);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="container">
      <Toaster className="toaster-alert" />
      <div className="Landing-section1">
        <div className="BannerLandingLeft"></div>
        <div className="BannerLandingRight">
          <div className="Inset">
            <p className="greetings">Good to see you</p>
            <button onClick={() => navigate("./products")} id="ShopAll">
              SHOP BACK IN STOCK
            </button>
          </div>
        </div>
      </div>
      <div className="home-carousel">
        <Carousel
          enableAutoPlay
          autoPlaySpeed={1500}
          renderArrow={myArrow}
          breakPoints={breakPoints}
          style={{ paddingBottom: "2.5em" }}
        >
          {shuffledProds.map((item) => {
            return (
              <div key={item.id} id="home-carousel-card-box">
                <div className="wishlist-btn-home">
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
                  id="home-carousel-card"
                  bordered={false}
                  hoverable
                  style={{
                    width: 335,
                  }}
                  cover={
                    <NavLink to={`/products/${item.id}`} state={item}>
                      <img
                        className="home-carousel-img"
                        src={item.image}
                        width={335}
                        alt=""
                      />
                    </NavLink>
                  }
                >
                  <Meta title={item.title} description={`€${item.price}`} />
                </Card>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}