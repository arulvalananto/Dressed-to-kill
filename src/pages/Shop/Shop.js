import React from "react";
import "./shop.scss";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import { Route } from "react-router";
import Collection from "../Collection/Collection";

const Shop = () => {
    return (
        <div className="shop">
            <Route path="/shop" exact component={CollectionOverview} />
            <Route path="/shop/:collectionId" component={Collection} />
        </div>
    );
};

export default Shop;
