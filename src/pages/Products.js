
import React, { useContext } from "react";
import { AppContext } from "../components/contextAPI/context";
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
                style={{maxHeight:"200"}}
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
