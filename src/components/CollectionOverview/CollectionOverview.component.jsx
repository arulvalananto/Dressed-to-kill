import React from "react";
import CollectionPreview from "../Collection-Preview/CollectionPreview.component";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const shopData = useSelector((state) => state.shop?.collections);

  return (
    <>
      {Object.keys(shopData).map((collectionName) => (
        <CollectionPreview name={collectionName} key={collectionName} />
      ))}
    </>
  );
};

export default CollectionOverview;
