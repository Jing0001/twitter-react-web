import React from "react";
import { Link } from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')

    return (
        <div className="list-group">
            <a className="list-group-item d-inline-flex justify-content-start">
                <i className="fab fa-twitter"></i>
                <span className="d-none d-xl-block">Tuiter</span>
            </a>
            <Link to="/tuiter/home"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'home' ? 'active' : ''}`}>
                <i className="fas fa-home wd-width20 wd-whiteFont"></i>
                <span className="d-none d-xl-inline">Home</span>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'explore' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Explore</span>
            </Link>

            <Link to="/tuiter/notifications"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'notifications' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Notifications</span>
            </Link>

            <Link to="/tuiter/messages"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'messages' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Messages</span>
            </Link>

            <Link to="/tuiter/bookmarks"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'bookmarks' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Bookmarks</span>
            </Link>

            <Link to="/tuiter/lists"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'lists' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Lists</span>
            </Link>

            <Link to="/tuiter/profile"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'profile' ? 'active' : ''}`}>
                <span className="d-none d-xl-inline">Profile</span>
            </Link>

            <Link to="/tuiter/more"
                  className={`list-group-item wd-noLinkLineDecor ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack wd-width20 fa-xs" >
                        </span>
                <span className="d-none d-xl-inline">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;


