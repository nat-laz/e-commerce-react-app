import React, { useState } from 'react'
import productArray from '../data/productArray.json'

export default function Products() {
  const [products, setProducts] = useState(productArray)

  return (
    <div>
      <h1>
        {products.map((e)=>{return(
        <><p>{e.title}</p>
        <img src={e.image} alt="" width="250"/>
        </>

        )})}
      </h1>
      </div>
)
}