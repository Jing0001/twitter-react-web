import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    // uses the useLocation() hook from the react-router-dom package to get the current location pathname.
    // The pathname variable is then extracted from the location object using destructuring assignment
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[2];
    // if active is an empty string or undefined, it will be set to the default value of 'explore'
    if (active === "" || active === undefined) {
        active = "explore";
    }

    return (
        <div className="list-group">
            <Link to={"/tuiter"}
                  className={`list-group-item`}>
                <div>
                    <i className="bi bi-twitter mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Tuiter</span>
                </div>
            </Link>

            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-house-fill mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </div>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-hash mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </div>
            </Link>

            <Link to="/"
                  className={`list-group-item list-group-item-action ${active === 'labs' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-boxes mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Labs</span>
                </div>
            </Link>

            <Link to="/tuiter/notifications"
                  className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-bell-fill mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </div>
            </Link>

            <Link to="/tuiter/messages"
                  className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-envelope-fill mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </div>
            </Link>

            <Link to="/tuiter/bookmarks"
                  className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-bookmark-fill mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </div>
            </Link>

            <Link to="/tuiter/lists"
                  className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-list-ul mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </div>
            </Link>

            <Link to="/tuiter/profile"
                  className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                <div>
                    <i className="bi bi-person-fill mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </div>
            </Link>

            <Link to="/tuiter/more"
                  className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack wd-width20 fa-xs">
                        </span>
                <div>
                    <i className="bi bi-three-dots mt-1 me-1"></i>
                    <span className="d-none d-xl-inline">More</span>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;


