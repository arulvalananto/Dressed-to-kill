import React, { useState } from "react";
import "./shop.scss";

import { SHOP_DATA } from "../../data/shop";

import CollectionPreview from "../../components/Collection-Preview/CollectionPreview";


const Shop = () => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop">
            {collections?.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default Shop;
