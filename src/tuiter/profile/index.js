import EditProfile from "../edit-profile";
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const wholeDate = profile.dateJoined.split("/");
    const month = parseInt(wholeDate[0]) - 1;
    const year = parseInt(wholeDate[1]);
    const dateJoined = new Date(year, month);
    const bornDate = new Date(profile.dateOfBirth).toLocaleString('en-CA', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <>
            <div className="row align-items-center justify-content-start">
                <div className="col-auto">
                    <button type="button" className="btn" title="back">
                        <i className="bi bi-arrow-left"/>
                    </button>
                </div>
                <div className="col-10">
                    <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
                    <div className="text-secondary mb-2">
                        {Number(profile.tuits).toLocaleString()} Tuits
                    </div>
                </div>
            </div>
            <img src={profile.bannerPicture} width="100%" height="250px" alt="..."/>
            <img src={profile.profilePicture} width="150px" height="150px" className="rounded-circle"
                 style={{position: "relative", marginTop: "-75px", marginLeft: "10px"}}/>
            <Link to="/tuiter/edit-profile">
                <button onClick={() => <EditProfile/>}
                        className="float-end btn rounded-pill border fw-bold mt-2 me-2">
                    Edit Profile
                </button>
            </Link>
            <div className="px-3">
                <h5 className="fw-bold mt-3 ms-1">{profile.firstName} {profile.lastName}</h5>
                <div className="text-secondary">
                    {profile.handle}
                </div>
                <div className="mt-2 ms-1">
                    {profile.bio}
                </div>
                <div className="text-secondary mt-2">
                    <span className="pe-4">
                        <i className="bi bi-geo-alt pe-2"/>
                        {profile.location}
                    </span>
                    <span className="pe-4">
                        <i className="bi bi-balloon pe-2"/>
                        Born {bornDate}
                    </span>
                    <span className="pe-4">
                    <i className="bi bi-calendar3 pe-2"></i>
                        Joined {dateJoined.toLocaleString("default", {month: "long"})} {dateJoined.getFullYear()}
                    </span>
                </div>
                <div className="mt-2">
                    <span className="pe-4">
                        <span className="fw-bold">{Number(profile.followingCount).toLocaleString()} </span>
                        <span className="text-secondary">Following</span>
                    </span>
                    <span className="pe-4">
                        <span className="fw-bold">{Number(profile.followersCount).toLocaleString()} </span>
                        <span className="text-secondary">Followers</span>
                    </span>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;