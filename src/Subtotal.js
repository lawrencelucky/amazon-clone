import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css';

import { useStateValue } from './StateProvider';

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  const getBasketTotal = basket => {
    const totalPrice = [];
    basket.map(basketPrice => totalPrice.push(basketPrice.price));
    return totalPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong className='subtotal__price'>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
