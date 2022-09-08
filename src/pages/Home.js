import React, { useContext } from "react";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Carousel, { consts } from "react-elastic-carousel";
import { Card } from "antd";
const { Meta } = Card;

export default function Home() {
  const navigate = useNavigate();
  const { products } = useContext(AppContext);

  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <img
          src={require("../assets/arrows/icons8-left-48.png")}
          alt="example"
        />
      ) : (
        <img
          src={require("../assets/arrows/icons8-right-48.png")}
          alt="example"
        />
      );

    return (
      <button
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
        onClick={onClick}
        disabled={isEdge}
      >
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
    { width: 1200, itemsToShow: 4},
  ];

  return (
    <>
      <div className="container">
        <div className="firstBanner"></div>

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
        <Carousel renderArrow={myArrow} breakPoints={breakPoints}>
          {shuffledProds.map((item) => {
            return (
              <div className="products-box ">
                <NavLink to={`/products/${item.id}`} state={item}>
                  <Card
                    id="home-carousel-card"
                    bordered={false}
                    hoverable
                    style={{
                      width: 300,
                      
                    }}
                    cover={
                      <img
                        className="products-img"
                        width={250}
                        alt="example"
                        src={item.image}
                      />
                    }
                  >
                    <Meta title={item.title} description={`€${item.price}`} />
                  </Card>
                </NavLink>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
