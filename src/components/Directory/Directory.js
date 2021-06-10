import React, { useEffect, useState } from "react";
import "./Directory.scss";

import MenuItem from "../MenuItem/MenuItem";
import { FETCH_DIRECTORY } from "../../redux/reducers/directoryReducers";
import { useDispatch, useSelector } from "react-redux";

const Directory = () => {
    const dispatch = useDispatch();
    const directory = useSelector((state) => state.directory);
    const [sections, setSections] = useState(directory);

    return (
        <div className="directory-menu">
            {sections?.map(({ id, ...otherSection }) => (
                <MenuItem key={id} {...otherSection} />
            ))}
        </div>
    );
};

export default Directory;
