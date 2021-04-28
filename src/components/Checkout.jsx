import React,{useContext} from "react";
import Nav from "./HomePageComponents/Nav";
import "../checkout.css";
import {StateContext} from "../Providers/stateProvider";
import CheckoutProduct from "./HomePageComponents/CheckoutProduct"

function findTotal(arr) {
  var total = 0;
  arr.forEach( (item) => {
    total = total + item.price * item.quantity;
  })
  return total;
}

export default function Checkout() {
  const [basket] = useContext(StateContext);
  const total = findTotal(basket);
  console.log(total);
  return (
    <div>
      <Nav />
      <div className="checkout">
          <div className="checkoutleft">
            <img className="checkoutad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="checkout_img" />
            <div>
            <p>Checkout Items</p>
            <div>
            { basket.length > 0 ?
              basket.map((item,i) => {
              return <CheckoutProduct key={i}  id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} quantity={item.quantity} />
            }
            ): <p className="noitem">No Item in Cart</p>
            }
            </div>
            </div>
          </div>
          <div className="checkoutright">
            <p>Total cost ({basket.length} items) : <strong>₹ {total}</strong></p>
           {/* <p>  <input type="checkbox" >This has a special gift</input> </p> */}
            <button>Proceed to checkout</button>
          </div>
      </div>
    </div>
  );
}
