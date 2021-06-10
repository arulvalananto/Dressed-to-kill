import React, { useState } from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../Collection-Preview/CollectionPreview";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
    const shopData = useSelector((state) => state.shop.collections);
    const [collections, setCollections] = useState(shopData);
    return (
        <div className="collections-overview">
            {collections?.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default CollectionOverview;
