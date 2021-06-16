import React from "react";
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartDropdownItems,
} from "./CartDropdown.styles";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { TOGGLE_CART } from "../../redux/reducers/cartReducers";

import CartItem from "../CartItem/CartItem.component";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </CartDropdownItems>
      <CartDropdownButton
        onClick={() => {
          dispatch(TOGGLE_CART());
          history.push("/checkout");
        }}
      >
        GO TO CHECK OUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
