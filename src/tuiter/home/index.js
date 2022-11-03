import React from "react";
import PostList from "../PostList";
import "./index.css";
import TuitList from "../tuits/tuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
                <TuitList/>
        </>
    );
};
export default HomeComponent;
