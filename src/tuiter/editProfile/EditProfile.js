import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {


    const data = useSelector((state) => state.myProfile);

    let [myProfile, setProfile] = useState(
        data[0]
    );

    const dispatch = useDispatch();
    const goBack = useNavigate();

    const saveProfile = () => {
        dispatch({type: 'save-profile', myProfile: myProfile});

    }

    return(
        <>
            <div className="row mb-4">
                <div>
                    <div className="row col-12 mb-3">


                        <div className="col-2"><i onClick={() => goBack(-1)} className="bi-x-lg text-white"></i></div>

                        <div className="col-8 ps-0">
                            <h6 className="text-white fw-bold mb-0">Edit Profile</h6>
                        </div>
                        <div className="col-2">
                            <Link to="/tuiter/profile">
                                <button className="bg-secondary border-0 rounded-pill float-end" onClick={saveProfile}>Save</button>
                            </Link>

                        </div>
                    </div>

                    <img width="100%" height="200px" src={myProfile.bannerPicture}/>
                    <div className="row col-12 pe-0">
                        <div className="col-6  mb-5">
                            <img className="img-fluid wd-tweet-profile-position ms-2" src={myProfile.profilePicture}/>
                        </div>
                    </div>
                    <div className="col-12 mt-5 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">First Name</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.firstName} onChange={(event) => setProfile({...myProfile, firstName: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Last Name</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.lastName} onChange={(event) => setProfile({...myProfile, lastName: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Handle</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.handle} onChange={(event) => setProfile({...myProfile, handle: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Bio</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.bio} onChange={(event) => setProfile({...myProfile, bio: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Location</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.location} onChange={(event) => setProfile({...myProfile, location: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Website</span>
                        <textarea className="col-12 bg-black" defaultValue={myProfile.website} onChange={(event) => setProfile({...myProfile, website: event.target.value})}></textarea>
                    </div>
                    <div className="col-12 border border-secondary p-2 mb-2">
                        <span className="col-12 mt-5">Birthdate</span>
                        <input type="date" className="col-12 bg-black" defaultValue={myProfile.dataOfBirth} onChange={(event) => setProfile({...myProfile, dataOfBirth: event.target.value})}></input>
                    </div>

                </div>

            </div>
        </>
    )
}

export default EditProfile;