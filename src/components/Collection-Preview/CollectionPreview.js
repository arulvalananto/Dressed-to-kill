import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "../Collection-Item/CollectionItem";
import { ADD_ITEM } from "../../redux/reducers/cartReducers";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const CollectionPreview = ({ title, items, routeName }) => {
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(ADD_ITEM(item));
    };

    const history = useHistory();

    return (
        <div className="collection-preview">
            <h1
                className="title"
                onClick={() => history.push(`/shop/${routeName}`)}
            >
                {title?.toUpperCase()}
            </h1>
            <div className="preview">
                {items?.map(
                    (item, i) =>
                        i < 4 && (
                            <CollectionItem
                                addItem={addItem}
                                key={item.id}
                                item={item}
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default CollectionPreview;
