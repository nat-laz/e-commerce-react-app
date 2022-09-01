import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import "./Products.css";

export default function Products() {
  const { products } = useContext(AppContext);

  return (
    <div className="products-wrapper">
      {products.map((item) => {
        return (
          <div className="products-box" key={item.id}>
            <NavLink to={`products/${item.id}`} products={item}>
              <img
                className="products-img"
                src={item.image}
                width={300}
                alt=""
              />
            </NavLink>
            <h2>{item.title}</h2>
            <p>
              <sup>€ </sup>
              {item.price}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
