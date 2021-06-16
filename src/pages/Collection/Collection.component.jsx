import React from "react";
import { CollectionItems } from "./Collection.styles";

import CollectionItem from "../../components/Collection-Item/CollectionItem.component";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ADD_ITEM } from "../../redux/reducers/cartReducers";

const Collection = () => {
  const { collectionId } = useParams();

  const collection = useSelector(
    (state) => state.shop.collections[collectionId]
  );

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(ADD_ITEM(item));
  };
  return (
    <>
      <div>
        <h2>{collection?.title}</h2>
        <CollectionItems>
          {collection?.items?.map((item) => (
            <CollectionItem addItem={addItem} key={item.id} item={item} />
          ))}
        </CollectionItems>
      </div>
    </>
  );
};

export default Collection;
