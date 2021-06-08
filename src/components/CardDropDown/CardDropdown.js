import React from "react";
import Button from "../Button/Button";

import "./CardDropdown.scss"

const CardDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <Button>GO TO CHECK OUT</Button>
        </div>
    );
};

export default CardDropdown;
