import React from "react";
import {
  CartIconContainer,
  CartIconCount,
  CartIconLogo,
} from "./CartIcon.styles";

import { TOGGLE_CART } from "../../redux/reducers/cartReducers";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(TOGGLE_CART());
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  const count = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  console.log(count);

  return (
    <CartIconContainer onClick={clickHandler}>
      <CartIconLogo />
      <CartIconCount>{count}</CartIconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
