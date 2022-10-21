import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
        <div className="list-group">
            <a className="list-group-item" href="/">
                <i className="bi-twitter"></i></a>
            <Link to="/tuiter/home" className= {`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi-house-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Home</span></i></Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`} >
                <i className="bi-hash"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Explore</span></i></Link>
            <Link to="#" className={`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                <i className="bi-bell-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Notifications</span></i></Link>
            <Link to="#" className={`list-group-item ${active === 'message' ? 'active' : ''}`} >
                <i className="bi-envelope-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Messages</span></i></Link>
            <Link to="#" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi-bookmark-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Bookmarks</span></i></Link>
            <a className={`list-group-item ${active === 'list' ? 'active' : ''}`} href="#">
                <i className="bi-list"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Lists</span></i></a>
            <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="#">
                <i className="bi-people-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Profile</span></i></a>
            <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="#">
                <i className="bi-circle-fill"> <span
                    className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">More</span></i></a>

        </div>

        <div className="d-grid mt-2">
            <a href="tweet.html"
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        </>
    );
};
export default NavigationSidebar;