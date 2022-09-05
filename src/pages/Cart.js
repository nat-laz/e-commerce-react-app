import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";


export default function Cart() {
  const {cart, setCart}  = useContext(AppContext)
  return (
    <div>
      <h2>update cart component</h2>
      <div>
        {cart.map(item=>(
          <div>
            {item.title}
          </div>
        ))}
      </div>
      </div>
  )
}
