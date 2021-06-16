import React from "react";
import {
  CollectionPreviewContent,
  CollectionPreviewContainer,
  CollectionPreviewTitle,
} from "./Collection-Preview.styles";

import CollectionItem from "../Collection-Item/CollectionItem.component";

import { ADD_ITEM } from "../../redux/reducers/cartReducers";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const CollectionPreview = ({ name }) => {
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(ADD_ITEM(item));
  };

  const history = useHistory();

  const { routeName, title, items } = useSelector(
    (state) => state.shop?.collections[name]
  );

  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`/shop/${routeName}`)}
      >
        {title?.toUpperCase()}
      </CollectionPreviewTitle>
      <CollectionPreviewContent>
        {items?.map(
          (item, i) =>
            i < 4 && (
              <CollectionItem addItem={addItem} key={item.id} item={item} />
            )
        )}
      </CollectionPreviewContent>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
