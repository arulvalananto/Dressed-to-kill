import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.compoent";
import StripeButton from "../../components/StripeButton/StripeButton.component";
import {
  CLEAR_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../redux/reducers/cartReducers";
// import "./Checkout.scss";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaders,
  CheckoutTotal,
  CheckoutPaymentWarning,
} from "./Checkout.styles";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  const clearHandler = (id) => {
    dispatch(CLEAR_ITEM({ id }));
  };

  const decreaseHandler = (id) => {
    dispatch(DECREASE_QUANTITY({ id }));
  };

  const increaseHandler = (id) => {
    dispatch(INCREASE_QUANTITY({ id }));
  };

  return (
    <CheckoutContainer>
      <CheckoutHeaders>
        <CheckoutHeader>
          <span>Product</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Description</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Quantity</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Price</span>
        </CheckoutHeader>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeaders>
      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          cartItem={item}
          clearHandler={clearHandler}
          decreaseHandler={decreaseHandler}
          increaseHandler={increaseHandler}
        />
      ))}
      <CheckoutTotal>
        <span>TOTAL: ${total}</span>
      </CheckoutTotal>
      <CheckoutPaymentWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </CheckoutPaymentWarning>
      <StripeButton price={total} />
    </CheckoutContainer>
  );
};

export default Checkout;
