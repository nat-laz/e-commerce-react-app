import {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./Tables.css";
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Tables = () => {
  const { products, globalAddToCart  } = useContext(AppContext);
  

  const tables = products.filter((item) => item.category === "tables");
  return (

    
    <div className="Tables">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {tables.map((item) => {
        return (
          <>
          <div className="Tables-box " key={item.id}>
          <NavLink to={`/products/${item.id}`} state={item}> 
            <img
              className="Tables-img"
              src={item.image}
              width={300}
              alt=""
            />
            </NavLink>
            <div className="Tables-title">
              
              <h2>{item.title}</h2>
              <p id="Tables-price">
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

export default Tables