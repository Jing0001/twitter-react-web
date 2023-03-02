import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[2];
    if (active === "" || active === undefined) {
        active = "explore";
    }

    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action d-inline-flex justify-content-start">
                <span className=" d-xl-block me-1">Tuiter</span>
            </a>
            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start list-group-item list-group-item-action d-inline-flex justify-content-start-action d-inline-flex justify-content-start ${active === 'home' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Home</span>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'explore' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Explore</span>
            </Link>

            <Link to="/"
                className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'labs' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Labs</span>
            </Link>

            <Link to="/tuiter/notifications"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'notifications' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Notifications</span>
            </Link>

            <Link to="/tuiter/messages"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'messages' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Messages</span>
            </Link>

            <Link to="/tuiter/bookmarks"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'bookmarks' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Bookmarks</span>
            </Link>

            <Link to="/tuiter/lists"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'lists' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Lists</span>
            </Link>

            <Link to="/tuiter/profile"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'profile' ? 'active' : ''}`}>
                <span className=" d-xl-block me-1">Profile</span>
            </Link>

            <Link to="/tuiter/more"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack wd-width20 fa-xs" >
                        </span>
                <span className=" d-xl-block me-1">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;


