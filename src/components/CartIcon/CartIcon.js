import React from "react";
import "./CartIcon.scss";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { TOGGLE_CART } from "../../redux/reducers/cartReducers";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(TOGGLE_CART());
    };

    const cartItems = useSelector((state) => state.cart.cartItems);

    const count = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        <div className="card-icon" onClick={clickHandler}>
            <LocalMallIcon className="shopping-icon" />
            <span className="item-count">{count}</span>
        </div>
    );
};

export default CartIcon;
