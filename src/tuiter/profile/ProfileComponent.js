import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = (
    {
        myProfile = {
            _id: '1234',
            firstName: 'Jose',
            lastName: 'Annunziato',
            handle: '@jannunzi',
            profilePicture: '../images/husky_img.jpeg',
            bannerPicture: require('../images/banner.png'),
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
                    <div className="col-6">
                        <Link to="/tuiter/profile/editProfile">
                            <button className="bg-black rounded-pill mt-3 border-1 border-white float-end">Edit Profile</button>
                        </Link>
                    </div>
                    <div className="mt-1">
                        <h5 className="ms-2 fw-bold mt-1">{myProfile.firstName} {myProfile.lastName}</h5>
                    </div>
                    <div>
                        <span className="ms-2">{myProfile.handle}</span>
                    </div>
                    <div className="ms-2">
                        <div className="mt-2 text-white">
                            <span>{myProfile.bio}</span>
                        </div>
                        <div className="mt-1">
                            <i className="bi-geo-alt-fill"></i>
                            <span className="ms-1">{myProfile.location}</span>
                            <i className="bi-link ms-3"></i>
                            <span className="ms-1 text-primary text-decoration-underline">{myProfile.website}</span>
                            <i className="bi-calendar-fill ms-3"></i>
                            <span className="ms-1">{myProfile.dataOfBirth}</span>
                            <i className="bi-calendar-fill ms-3"></i>
                            <span className="ms-1">{myProfile.dateJoined}</span>
                        </div>
                        <div className="mt-1">
                            <span><strong className="text-white">{myProfile.followingCount}</strong> Following</span>
                            <span className="ms-3"><strong className="text-white">{myProfile.followersCount}</strong> Followers</span>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ProfileComponent;