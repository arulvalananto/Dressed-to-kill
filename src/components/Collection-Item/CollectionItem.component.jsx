import React from "react";
import {
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemBackground,
  CollectionItemFooterName,
  CollectionItemFooterPrice,
  CollectionItemButton,
} from "./Collection-Item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemBackground
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></CollectionItemBackground>
      <CollectionItemFooter>
        <CollectionItemFooterName>{name}</CollectionItemFooterName>
        <CollectionItemFooterPrice>${price}</CollectionItemFooterPrice>
      </CollectionItemFooter>
      <CollectionItemButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
