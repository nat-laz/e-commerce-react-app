import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./Chairs.css";
import { RiShoppingBasket2Line } from "react-icons/ri";


const Chairs = () => {
  const { products  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    
    <div className="Chairs">
      {products.map((item) => {
        return (
          <>
          <div className="Chairs-box " key={item.id}>
            <img
              className="Chairs-img"
              src={item.image}
              width={300}
              alt=""
            />
            <div className="chairs-title">
              
              <h2>{item.title}</h2>
              <p id="Chairs-price">
                {`€ ${item.price}`}
              
              </p>
              <Link to={"/cart"}>< RiShoppingBasket2Line style ={{fontSize:"2em"}} onClick={() => navigate("/cart")}/></Link>
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