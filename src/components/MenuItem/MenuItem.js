import React from "react";
import { useHistory } from "react-router";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, link }) => {
    const history = useHistory();

    return (
        <div className={`menuItem ${size}`} onClick={() => history.push(link)}>
            <div
                className="background-image"
                style={{
                    background: `url(${imageUrl})`,
                    backgroundClip: "border-box",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                {/* <span className="subtitle">SHOP NOW</span> */}
            </div>
        </div>
    );
};

export default MenuItem;
