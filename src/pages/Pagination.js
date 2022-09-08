import React from "react";
import "./Pagination.css";
import { v4 as uuid } from "uuid";

export default function Pagination({ productsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {pageNumbers.map((number) => {
          return (
            <>
              <li
                className="Numero"
                key={uuid()}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
}
