import React,{useContext} from 'react'
import {StateContext} from "../../Providers/stateProvider";
export default function CheckoutProduct({id,title,price,rating,image}) {
    const [basket,updatebasket] = useContext(StateContext);
    return (
        <div className="checkoutproduct">
           <img className="checkoutimage" src={image} alt="checkoutproduct" />
            <div className="checkoutinfo">
              <p ><strong>{title}</strong></p>
              <p><small>₹</small><strong>{price}</strong></p>
              <div className="checkoutrating">
              {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
              </div>
              <button className="removebutton" onClick = {()=>{
                   updatebasket( (prevState) => {
                       console.log("Found");
                      const newState = prevState.filter( (item) => {
                          return item.id !== id;
                       })
                       return newState;
                   })
                   alert("Confirm remove from cart");
              }}>Remove this item from cart</button>
            </div>
        </div>
    )
}
