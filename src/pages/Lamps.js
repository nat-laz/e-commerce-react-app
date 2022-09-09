import React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { RiShoppingBasket2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { Card } from "antd";
const { Meta } = Card;


const Lamps = () => {
  const { products, globalAddToCart  } = useContext(AppContext);


  const lamps = products.filter((item) => item.category === "Lamp");
  return (
    
    <div className="products-wrapper">
       <Toaster style={{border:"1px solid black",color:"black"}}/>
      {lamps.map((item) => {
        return (
          <div className="products-box " key={item.id}>
              <Card
                hoverable
                bordered={false}
                style={{ width: 350}}
                cover={
                  <NavLink to={`/products/${item.id}`} state={item}>
                  <img
                    className="products-img"
                    src={item.image}
                    width={300}
                    alt=""
                  />
                </NavLink>
                }
              >
           <div className="products-details">     
           <Meta style={{marginLeft: "-23px", padding: "5px"}} title={item.title}/>
                <button
                    className={`chairs-addtocart product-price`}
                    // id="product-price"
                    onClick={() => {
                      globalAddToCart(item.id);
                      toast(`ITEM WAS ADDED TO YOUR CART`);
                    }}>
                     <span> {`€${item.price}`}</span>
                    <RiShoppingBasket2Line style={{ fontSize: "1.6em" }} className="products-btn"/>
                </button>
                </div>
              </Card>
            </div>
        );
      }

      )}
      
    </div>
    
  )
}

export default Lamps