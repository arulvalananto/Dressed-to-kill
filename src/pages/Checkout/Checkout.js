import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";
import {
    CLEAR_ITEM,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
} from "../../redux/reducers/cartReducers";
import "./Checkout.scss";

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
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem
                    key={item.id}
                    cartItem={item}
                    clearHandler={clearHandler}
                    decreaseHandler={decreaseHandler}
                    increaseHandler={increaseHandler}
                />
            ))}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="collection-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    );
};

export default Checkout;
