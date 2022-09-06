import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Product.css";
import { Carousel } from "antd";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

export default function Product() {
  const location = useLocation();

  const { setCart, cart } = useContext(AppContext);
  // const { id } = useParams();
  // const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
  // // // console.log(id);
  // // const [product, setProduct] = useState({});

  // // useEffect(() => {
  // //   const singleProduct = products.find((item) => item.id === +id); //used "+" to convert in number
  // //   setProduct(singleProduct);
  // // }, []);
  // // //  console.log(product)
  const addToCart = () => {
    const findedItem = cart.find((item) => item.id === location.state.id);
    if (findedItem) {
      findedItem.quantity++;
      return setCart([...cart]);
    } else {
      location.state.quantity = 1;
      return setCart([...cart, location.state]);
    }
  };

  return (
    <div className="Product">
      {location.state && (
        <div className="single-product-box">
          <div className="single-product-img-arrows">
            <VscArrowLeft />
            <div className="single-product-images-carousel">
              <Carousel
                autoplay
                pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
              >
                <img src={location.state.image} alt="" width={200} />

                <img src={location.state.images[0]} alt="" width={200}/>

                <img src={location.state.images[1]} alt="" width={200}/>

                <img src={location.state.images[2]} alt="" width={200}/>
              </Carousel>
            </div>
            <VscArrowRight />
          </div>
          <div className="single-page-details">
            <h1>{location.state.category}</h1>
            <h3>{location.state.title}</h3>
            <button onClick={addToCart}>add to cart</button>
            <h3>Description</h3>
            <p>{location.state.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
