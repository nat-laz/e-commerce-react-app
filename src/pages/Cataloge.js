import React from 'react'
import { Link } from 'react-router-dom'
import "./Cataloge.css"

const Cataloge = () => {
  return (
    <div className='Cataloge'>
        <div className='cataloge-img'>
        <Link to={"/chairs"}><img src={require("../assets/cataloge/ion-fet-C4G18Paw0d4-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img'>
        <Link to={"/tables"}><img src={require("../assets/cataloge/goashape-IFwda7CkzFQ-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img'>
        <Link to={"/lamps"}><img src={require("../assets/cataloge/steffen-lemmerzahl-Y_kgII7ML3M-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img'>
        <Link to={"/bookcase"}><img src={require("../assets/cataloge/lesly-juarez-EW2cPMEp0mI-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
    </div>
  )
}

export default Cataloge