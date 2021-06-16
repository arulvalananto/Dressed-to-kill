import React from "react";
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemRemoveButton,
  CheckItemRow,
  CheckItemQuantity,
} from "./CheckoutItem.styles";

const CheckoutItem = ({
  cartItem,
  clearHandler,
  decreaseHandler,
  increaseHandler,
}) => {
  const { name, price, quantity, imageUrl, id } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutItemImageContainer>
      <CheckItemRow>{name}</CheckItemRow>
      <CheckItemQuantity>
        <div onClick={() => decreaseHandler(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increaseHandler(id)}>&#10095;</div>
      </CheckItemQuantity>
      <CheckItemRow>{price}</CheckItemRow>
      <CheckoutItemRemoveButton onClick={() => clearHandler(id)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
