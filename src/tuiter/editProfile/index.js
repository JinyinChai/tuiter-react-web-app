import React from "react";
import EditProfile from "./EditProfile";
import myProfileArray from "../data/profile.json"
import {useSelector} from "react-redux";

const EditProfileComponent = () => {
    const myProfileArray = useSelector((state) => state.myProfile);

    return(
        <>
            {
                myProfileArray.map(myProfile => {
                    return(
                        <EditProfile myProfile={myProfile} key={myProfile._id}/>
                    )
                })
            }
        </>
    )
}

export default EditProfileComponent;