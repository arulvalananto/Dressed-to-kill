import React from "react";
import { DirectoryContainer } from "./Directory.styles";

import MenuItem from "../MenuItem/MenuItem.component";
import { useSelector } from "react-redux";

const Directory = () => {
  const directory = useSelector((state) => state.directory);

  return (
    <DirectoryContainer>
      {directory?.map(({ id, ...otherSection }) => (
        <MenuItem key={id} {...otherSection} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
