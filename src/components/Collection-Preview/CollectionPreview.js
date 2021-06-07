import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "../Collection-Item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title?.toUpperCase()}</h1>
            <div className="preview">
                {items?.map(({ id, ...otherProps }) => (
                    <CollectionItem key={id} {...otherProps} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
