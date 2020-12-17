import React from 'react';

import './Checkout.css';

import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          className='checkout__ad'
          alt=''
        />

        <div className='classname'>
          <h2 className='checkout__title'>Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
