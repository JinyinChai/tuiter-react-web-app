import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import TuitList from "../tuits/tuitsList";

const ProfileList = () => {
    const myProfileArray = useSelector((state) => state.myProfile);

    return(
        <>
            {
                myProfileArray.map(myProfile => {
                    return(
                        <ProfileComponent myProfile={myProfile} key={myProfile._id}/>
                    )
                })
            }
            <TuitList/>
        </>
    )
}

export default ProfileList;