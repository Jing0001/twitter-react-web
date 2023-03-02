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
            <Link to={"/tuiter"} className={`list-group-item`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-twitter  mt-1 me-1"></i>
                    Tuiter
                </div>
                <div className={"d-xl-none"}><i className="bi bi-twitter  mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start list-group-item list-group-item-action d-inline-flex justify-content-start-action d-inline-flex justify-content-start ${active === 'home' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-house-fill mt-1 me-1"></i>
                    Home</div>
                <div className={"d-xl-none"}><i className="bi bi-house-fill mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'explore' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-hash mt-1 me-1"></i>Explore</div>
                <div className={"d-xl-none"}><i className="bi bi-hash mt-1 me-1"></i></div>
            </Link>

            <Link to="/"
                className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'labs' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-boxes mt-1 me-1"></i>Labs</div>
                <div className={"d-xl-none"}><i className="bi bi-boxes mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/notifications"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'notifications' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-bell-fill mt-1 me-1"></i>Notifications</div>
                <div className={"d-xl-none"}><i className="bi bi-bell-fill mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/messages"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'messages' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-envelope-fill mt-1 me-1"></i>Messages</div>
                <div className={"d-xl-none"}><i className="bi bi-envelope-fill mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/bookmarks"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-bookmark-fill mt-1 me-1"></i>Bookmarks</div>
                <div className={"d-xl-none"}><i className="bi bi-bookmark-fill mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/lists"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'lists' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-list-ul mt-1 me-1"></i>Lists</div>
                <div className={"d-xl-none"}><i className="bi bi-list-ul mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/profile"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'profile' ? 'active' : ''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-person-fill mt-1 me-1"></i>Profile</div>
                <div className={"d-xl-none"}><i className="bi bi-person-fill mt-1 me-1"></i></div>
            </Link>

            <Link to="/tuiter/more"
                  className={`list-group-item list-group-item-action d-inline-flex justify-content-start ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack wd-width20 fa-xs" >
                        </span>
                <div className="d-none d-xl-block"><i className="bi bi-three-dots mt-1 me-1"></i>More</div>
                <div className={"d-xl-none"}><i className="bi bi-three-dots mt-1 me-1"></i></div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;


