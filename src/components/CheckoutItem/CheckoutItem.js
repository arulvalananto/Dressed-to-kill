import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = ({
    cartItem,
    clearHandler,
    decreaseHandler,
    increaseHandler,
}) => {
    const { name, price, quantity, imageUrl, id } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseHandler(id)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseHandler(id)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearHandler(id)}>
                &#10005;
            </span>
        </div>
    );
};

export default CheckoutItem;
