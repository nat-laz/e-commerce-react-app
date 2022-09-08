import React,{useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./Bookcase.css";
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Bookcase = () => {
  const { products, globalAddToCart  } = useContext(AppContext);
  

  const bookcase = products.filter((item) => item.category === "bookcase");
  return (
    
    <div className="Bookcase">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {bookcase.map((item) => {
        return (
          <>
          <div className="Bookcase-box " key={item.id}>
          <NavLink to={`/products/${item.id}`} state={item}> 
            <img
              className="Bookcase-img"
              src={item.image}
              width={300}
              alt=""
            />
            </NavLink>
            <div className="Bookcase-title">
              
              <h2>{item.title}</h2>
              <p id="Bookcase-price">
                {`€ ${item.price}`}
              
              </p>
              <button className="chairs-addtocart" onClick={()=>{globalAddToCart(item.id); toast(`you added an item to your cart`)}}>< RiShoppingBasket2Line style ={{fontSize:"2em"}}/></button>           </div>
          </div>
          </>
        );
      }

      )}
      
    </div>
    
  )
}

export default Bookcase