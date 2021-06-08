import React from "react";
import "./CollectionItem.scss";

import Button from "../Button/Button";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;


    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button inverted onClick={() => addItem(item)}>
                ADD TO CART
            </Button>
        </div>
    );
};

export default CollectionItem;
