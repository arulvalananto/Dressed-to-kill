import React from "react";
import "./Directory.scss";

import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";

const Directory = () => {
    const directory = useSelector((state) => state.directory);
    // const [sections, setSections] = useState(directory);

    return (
        <div className="directory-menu">
            {directory?.map(({ id, ...otherSection }) => (
                <MenuItem key={id} {...otherSection} />
            ))}
        </div>
    );
};

export default Directory;
