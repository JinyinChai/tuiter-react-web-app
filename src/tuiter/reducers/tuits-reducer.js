import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "images/elon_musk_avatar.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comments": 0,
    "tweets": 0,
    "heart": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        likeTuit(state, action) {
            state.map(tuits => {
                if (tuits._id === action.payload) {
                    if (tuits.liked === true) {
                        tuits.liked = false;
                        tuits.heart--;
                    } else {
                        tuits.liked = true;
                        tuits.heart++;
                    }
                    return tuits;
                } else {
                    return tuits;
                }
            });
        }

    }


});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;