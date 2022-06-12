import React from "react";
import { UseStateValue } from "./StateProvider";
import "./Checkout.css";

import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
const Checkout = () => {
  const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className="Checkout">
    <div className="checkout_left">
      <img
        className="checkout_image"
        src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
        alt="checkoutImage"
      ></img>

      <div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}</div>
      </div>
      <div>
      {basket.length>0 &&(
        <div className="checkout-r">
       
        <h1> SubTotal</h1>
        <Subtotal/>
        </div>
      )}
      </div>
    
    </div>
  );
};

export default Checkout;
