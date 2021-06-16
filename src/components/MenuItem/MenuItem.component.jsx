import React from "react";
import {
  MenuItemContainer,
  MenuItemBackground,
  MenuItemContent,
  MenuItemContentTitle,
} from "./MenuItem.styles";

import { useHistory } from "react-router";

const MenuItem = ({ title, imageUrl, size, link }) => {
  const history = useHistory();

  const backgroundStyles = {
    background: `url(${imageUrl})`,
    backgroundClip: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <MenuItemContainer size={size} onClick={() => history.push(link)}>
      <MenuItemBackground style={backgroundStyles} />
      <MenuItemContent>
        <MenuItemContentTitle>{title}</MenuItemContentTitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
