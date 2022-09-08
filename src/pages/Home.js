import React, {useContext} from "react";
import "./Home.css";
import {AppContext} from '../context/AppContext';
import  Carousel  from "react-elastic-carousel";
import {v4 as uuid} from "uuid"

export default function Home() {
  const {products} = useContext(AppContext);
  /* let bebe = [{name:"Kai", lugar:"caracas"},
  {name:"Nathalia", lugar:"vaina2"},
  {name:"Rad", lugar:"vaina3"},
  {name:"tutu", lugar:"vait2"},] */
 
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

  let shuffledProds = shuffle(products);


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
  


  return (
    <div className="container">
     
    <div className="firstBanner">
    </div>
    <Carousel breakPoints={breakPoints}>
      {shuffledProds.map((item) => {
      return (
        <div key={uuid()} className="carousel-item">
          <img id="carousel-img" src={item.image} alt="" width="500" />
        </div>
      )})
    }
    
   
    </Carousel>
      
      
    </div>)
    
}
