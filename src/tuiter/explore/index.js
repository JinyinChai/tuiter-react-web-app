import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute start-0 top-0 ps-4 pt-2 text-secondary"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-4 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="images/spaceX_starship.webp" className="w-100"/>
                <div className="h1 text-white position-absolute bottom-0">SpaceX's Starship</div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;