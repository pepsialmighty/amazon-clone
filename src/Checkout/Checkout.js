import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__ad'
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>
            <p>
              You have no items in your basket. To buy one or more item, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your shopping Basket</h2>
            {basket?.map((item, i) => {
              console.log(item.id);
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
