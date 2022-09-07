import {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./Chairs.css";
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Chairs = () => {
  const { products, globalAddToCart } = useContext(AppContext);

  const chairs = products.filter((item) => item.category === "chairs");
  return (
    
    <div className="Chairs">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {chairs.map((item) => {
        return (
          <>
          <div className="Chairs-box " key={item.id}>
           
           <NavLink to={`/products/${item.id}`} state={item}>
             
             <img
               className="Chairs-img"
               src={item.image}
               width={300}
               alt=""
             />
           </NavLink>
            <div className="chairs-title">
              
              <h2>{item.title}</h2>
              <p id="Chairs-price">
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

export default Chairs