import React from 'react'
import "./Pagination.css"


export default function Pagination({productsPerPage, totalPosts, paginate}) {
  const pageNumbers = [];

  for (let i = 1 ; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pageNumbers.push(i);}


  return (
    <>
    <nav>
      <ul style={{display:"flex", listStyle:"none", textAlign:"center", justifyContent:"center"}}>
        {pageNumbers.map(number => {
          return (
          <>
          <li className="Numero" key={number}>
          <p onClick={()=>paginate(number)} style={{fontSize:"2rem", cursor:"pointer"}}>{number}</p></li>
          </>)
          })}
      </ul>
    </nav>
    </>
  )
}
