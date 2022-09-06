import React from 'react'

export default function Pagination({productsPerPage, totalPosts}) {
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
          <li style={{fontSize:"3rem", margin:"10px", border:"1px solid black", padding:"10px"}} key={number}>
          <a style={{fontSize:"2rem"}}href="!#">{number}</a></li>
          </>)
          })}
      </ul>
    </nav>
    </>
  )
}
