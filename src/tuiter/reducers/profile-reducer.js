import { createSlice } from "@reduxjs/toolkit";
import myProfile from "../data/profile.json";

const profileSlice = (state = myProfile, action) => {
    switch (action.type) {
        case 'save-profile':

            return [action.myProfile]

        default:
            return myProfile;
    }
}

export default profileSlice;