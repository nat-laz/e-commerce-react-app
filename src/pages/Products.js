import React, { useState } from 'react'
import productArray from '../data/productArray.json'
import "../App.css"

export default function Products() {
  const [products, setProducts] = useState(productArray)


  const filteredData = products.filter(product => product.category === 'chairs')


  return (
    
    <div>
      <img className="thumbnails" style={{width:"300px", height:"300px", padding:"30px",borderRadius:"50px", border:"1px solid black"}} src={filteredData[0].images}></img>
      <button>furniture</button>
      <h1>
        {filteredData.map((e)=>{return(
        <><p>{e.title}</p>
        <img src={e.image} alt="" width="250"/>
        </>

        )})}
      </h1>
      </div>
)
}