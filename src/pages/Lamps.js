import React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./Lamps.css";
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Lamps = () => {
  const { products, globalAddToCart  } = useContext(AppContext);


  const lamps = products.filter((item) => item.category === "floor lamp");
  return (
    
    <div className="Lamps">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {lamps.map((item) => {
        return (
          <>
          <div className="Lamps-box " key={item.id}>
            <NavLink to={`/products/${item.id}`} state={item}> 
              <img
                className="Lamps-img"
                src={item.image}
                width={300}
                alt=""
              />
            </NavLink>
            <div className="Lamps-title">
              
              <h2>{item.title}</h2>
              <p id="Lamps-price">
                {`€ ${item.price}`}
              
              </p>
              <button className="chairs-addtocart" onClick={()=>{globalAddToCart(item.id); toast(`you added an item to your cart`)}}>< RiShoppingBasket2Line style ={{fontSize:"2em"}}/></button>
            </div>
          </div>
          </>
        );
      }

      )}
      
    </div>
    
  )
}

export default Lamps