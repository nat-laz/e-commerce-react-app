import React from 'react'

export default function Pagination({productsPerPage, totalposts}) {
  const pageNumbers = [];

  for (let i = 1 ; i <= Math.ceil(totalposts / productsPerPage); i++) {
    pageNumbers.push(i);}


  return (
    <>
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="!#">{number}</a></li>))}
      </ul>
    </nav>
    </>
  )
}
