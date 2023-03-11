import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const selectAllTuits = (state) => state.tuits;
    const tuits = useSelector(selectAllTuits);

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem tuit={tuit} />
                )
            }
        </ul>
    )
};
export default TuitsList;