import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import CardIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = () => {
    const currentUser = useSelector((state) => state.cart.currentUser);
    const hidden = useSelector((state) => state.cart.hidden);

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img src={Logo} className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link to="/signin" className="option">
                        Sign In
                    </Link>
                )}
                <CardIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    );
};

export default Header;
