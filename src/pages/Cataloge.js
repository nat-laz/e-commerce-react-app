import React from 'react'
import { Link } from 'react-router-dom'
import "./Cataloge.css"

const Cataloge = () => {
  return (
    <div className='Cataloge'>
      
        <div className='cataloge-img ti'>
        <Link to={`/chairs`}>
          <div class="tag to">Chairs</div>
        </Link>
        <Link to={"/chairs"}><img src={require("../assets/cataloge/chairs.jpg")} alt=""  /></Link>
        </div>
     
        <div className='cataloge-img ti'>
        <Link to={`/tables`}>
          <div class="tag to">Tables</div>
        </Link>
        <Link to={"/tables"}><img src={require("../assets/cataloge/table.jpg")} alt=""  /></Link>
        </div>
        <div className='cataloge-img ti'>
        <Link to={`/lamps`}>
          <div class="tag to">Lamps</div>
        </Link >
        <Link to={"/lamps"}><img src={require("../assets/cataloge/lamp.jpg")} alt=""  /></Link>
        </div>
        <div className='cataloge-img ti'>
        <Link to={`/bookcase`}>
          <div class="tag to">Bookcases</div>
        </Link>
        <Link to={"/bookcase"}><img src={"https://images.unsplash.com/photo-1558636815-1978d0419bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" width="150" /></Link>
        </div>
    </div>
  )
}

export default Cataloge