import React from "react";
import { UseStateValue } from "./StateProvider";
import "./checkoutProduct.css";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = UseStateValue();
  console.log(id, title, image, price, rating);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div class="checkoutProduct">
    
      <img class="checkoutproduct_image" src={image} alt="" />
     
        <div className="checkoutProduct-info">
          <p className="title">{title}</p>
          <p className="CheckoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="Checkout_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <button className="checkout_button" onClick={removeFromCart}>
            {" "}
            Remove from Basket
          </button>
        </div>
      
    </div>
  );
};

export default CheckoutProduct;
