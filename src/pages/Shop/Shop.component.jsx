import React from "react";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview.component";
import Collection from "../Collection/Collection.component";

import { Route } from "react-router";

const Shop = () => {
    return (
        <div className="shop">
            <Route path="/shop" exact component={CollectionOverview} />
            <Route path="/shop/:collectionId" component={Collection} />
        </div>
    );
};

export default Shop;
