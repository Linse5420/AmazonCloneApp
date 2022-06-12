import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import './Subtotal.css';
const Subtotal = () => {
  const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className='subtotal'>
    <CurrencyFormat
    renderText={(value)=>(
      <>
      <p>
      SubTotal({basket.length}items):<strong>{`${value}`}</strong>
      </p>
      <small className='subtotal_gifts'>
      <input type="checkbox"/> Do you wish it to be a gift?
      </small>
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />
<button className='checkout_buttom'>Proceed to checkout</button>


    </div>
  );
}

export default Subtotal;