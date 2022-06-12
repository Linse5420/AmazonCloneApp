import React from "react";
import "./Product.css";
import { UseStateValue } from "./StateProvider";
const product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = UseStateValue();
  const addToBasket=()=>
  {
    //add item to the basket
    dispatch({
      type:"ADD_TO_CART",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating

      }
    })
  };
  return (
    
    
    <div className="product">
      <div class="Product_info">
          <p>{title}</p>
         
          <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
          </p>
          <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="image" />
      <button onClick={addToBasket}> Add to cart</button>
    </div>
  );
};

export default product;
