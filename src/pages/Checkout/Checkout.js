import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./Checkout.scss";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const total = cartItems.reduce(
        (acc, cur) => acc + cur.quantity * cur.price,
        0
    );

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
                <CheckoutItem cartItem={item} />
            ))}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

export default Checkout;
