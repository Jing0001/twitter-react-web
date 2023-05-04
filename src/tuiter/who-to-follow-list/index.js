import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                // For each who object in the whoArray, a WhoToFollowListItem component is rendered with two props: key and who.
                // The key prop is used by React to keep track of the items in the list and should be a unique identifier for each item.
                // The who prop is an object that contains information about the user to be displayed in the list.
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;
