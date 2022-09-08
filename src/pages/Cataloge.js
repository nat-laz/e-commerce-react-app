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
        <Link to={"/chairs"}><img src={require("../assets/cataloge/ion-fet-C4G18Paw0d4-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img ti'>
        <Link to={`/tables`}>
          <div class="tag to">Tables</div>
        </Link>
        <Link to={"/tables"}><img src={require("../assets/cataloge/goashape-IFwda7CkzFQ-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img ti'>
        <Link to={`/lamps`}>
          <div class="tag to">Lamps</div>
        </Link >
        <Link to={"/lamps"}><img src={require("../assets/cataloge/steffen-lemmerzahl-Y_kgII7ML3M-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
        <div className='cataloge-img ti'>
        <Link to={`/bookcase`}>
          <div class="tag to">Bookcases</div>
        </Link>
        <Link to={"/bookcase"}><img src={require("../assets/cataloge/lesly-juarez-EW2cPMEp0mI-unsplash.jpg")} alt="" width="150" /></Link>
        </div>
    </div>
  )
}

export default Cataloge