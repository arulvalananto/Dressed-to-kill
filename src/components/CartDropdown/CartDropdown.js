import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { TOGGLE_CART } from "../../redux/reducers/cartReducers";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const history = useHistory();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button
                onClick={() => {
                    dispatch(TOGGLE_CART());
                    history.push("/checkout");
                }}
            >
                GO TO CHECK OUT
            </Button>
        </div>
    );
};

export default CartDropdown;
