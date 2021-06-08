import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <Button>GO TO CHECK OUT</Button>
        </div>
    );
};

export default CartDropdown;
