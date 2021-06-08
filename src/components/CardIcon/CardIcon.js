import React from "react";
import "./CardIcon.scss";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { TOGGLE_CART } from "../../redux/reducers/cartReducers";
import { useDispatch } from "react-redux";

const CardIcon = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(TOGGLE_CART());
    };

    return (
        <div className="card-icon" onClick={clickHandler}>
            <LocalMallIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CardIcon;
