import React,{useContext} from "react";
import {StateContext} from "../../Providers/stateProvider";

export default function Product({id, title, price, rating, image }) {
  const [basket,updatedata] = useContext(StateContext);
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      {/* <div className="product_info2"> */}
        <img className="product_image" src={image} alt="product_image" />
        <button  onClick={()=>{
          updatedata((prevState) => {
            return [ ...prevState,{title:title,price:price,rating:rating,image:image,id:id}]
          })
        }} className="product_to_cart"> Add to Cart </button>
      {/* </div> */}
    </div>
  );
}
