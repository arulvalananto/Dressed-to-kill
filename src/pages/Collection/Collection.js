import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../../components/Collection-Item/CollectionItem";
import { ADD_ITEM } from "../../redux/reducers/cartReducers";
import "./Collection.scss";

const Collection = () => {
    const { collectionId } = useParams();
    
    const collections = useSelector((state) => state.shop.collections);
    const collection = collections.filter(
        (collection) => collection.routeName === collectionId
    );

    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(ADD_ITEM(item));
    };
    return (
        <div className="collection">
            {collection.map(({ title, items }) => (
                <div key={title} className="collection-details">
                    <h2>{title}</h2>
                    <div className="collection-items">
                        {items?.map((item) => (
                            <CollectionItem
                                addItem={addItem}
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Collection;
