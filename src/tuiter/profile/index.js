import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./ProfileComponent";

const ProfileList = () => {
    const myProfile = useSelector((state) => state.myProfile);


    return(
        <>
            {
                myProfile.map(myProfile => {
                    return(
                        <ProfileComponent myProfile={myProfile} key={myProfile._id}/>
                    )
                })
            }
        </>
    )
}

export default ProfileList;