import React, {useState} from "react";
import {useNavigate } from "react-router-dom";                        // useNavigate: use to go back previous route
import {useDispatch, useSelector} from "react-redux";

const EditProfile = (
    {
        myProfile = {
            _id: '1234',
            firstName: 'Jose',
            lastName: 'Annunziato',
            handle: '@jannunzi',
            profilePicture: 'images/husky_img.jpeg',
            bannerPicture: 'images/banner.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
            location: 'Boston, MA',
            dataOfBirth: '7/7/1968',
            website: 'youtube.com/webdevtv',
            dateJoined: '4/2009',
            followingCount: 340,
            followersCount: 223,
            tweets: 11231
        }
    }
) => {
    return(
        <>
            <div className="row mb-5">
                <div>
                    <div className="row col-12">
                        <div className="col-2"><i className="bi-arrow-left text-white"></i></div>
                        <div className="col-10 ps-0">
                            <h5 className="text-white fw-bold mb-0">{myProfile.firstName} {myProfile.lastName}</h5>
                            <span className="mb-0">{myProfile.tweets} Tweets</span>
                        </div>
                    </div>

                    <img width="100%" height="200px" src={myProfile.bannerPicture}/>
                    <div className="row col-12 pe-0">
                        <div className="col-6">
                            <img className="img-fluid wd-tweet-profile-position ms-2" src={myProfile.profilePicture}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile;