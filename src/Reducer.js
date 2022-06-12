export const initialState = {
  basket: [  {
    id:"123434555",
    title:"2021 Apple 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey",
    image:"https://m.media-amazon.com/images/I/61Tt3fiFVAS._AC_SL1000_.jpg",
    price:568.99,
    rating:4,

  },
  {
    id:"12343cdh5",
    title:"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey, French",
    image:"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX342_.jpg",
    price:1578.99,
    rating:5,

  }
  
  ],
  user:null,
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);
const reducer=(state, action) =>
{
    console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
        //adds more items into the cart
        return {
            ...state,
        basket:[...state.basket, action.item]}
      break;
    case "REMOVE_FROM_CART":
      let newBasket=[...state.basket];
      const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
      if (index>=0)
      {
        newBasket.splice(index,1);
      }
      else
      {
        console.warn(
          `can't remove product(id:${action.id} as no product exists)`
        );
      }
        return {...state, basket:newBasket};
    default:
      return state;
  }
}
export default reducer;