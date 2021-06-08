import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "../Collection-Item/CollectionItem";
import { ADD_ITEM } from "../../redux/reducers/cartReducers";
import { useDispatch } from "react-redux";

const CollectionPreview = ({ title, items }) => {
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(ADD_ITEM(item));
    };

    return (
        <div className="collection-preview">
            <h1 className="title">{title?.toUpperCase()}</h1>
            <div className="preview">
                {items?.map((item) => (
                    <CollectionItem
                        addItem={addItem}
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
