import React from "react";
// defines a React functional component called WhoToFollowListItem
const WhoToFollowListItem = (
    {
        // takes a single prop called who, which is an object containing information about a user to be displayed in a list of suggested people to follow on a social media platform.
        who
        // either way is fine, browser will not show NASA if NASA not exists in who.json
        // who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
