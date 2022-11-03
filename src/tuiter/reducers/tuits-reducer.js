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


// import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../tuits/tuits.json';
//
// const tuitsReducer = (state = tuits, action) => {
//     switch (action.type) {                                  // add a switch to handler different events
//         case 'like-tuit':                                   // handles the like-tuit event
//             return state.map(tuits =>{                      // calculate new state
//                 if (tuits._id === action.tuits._id) {       // if it coincides with the tuit we liked
//                     if (tuits.liked === true) {             // if tuit is already liked
//                         tuits.liked = false;                // set the tuit.liked to false
//                         tuits.likes--;                      // decrement tuit.likes by 1
//                     }  else {                               // otherwise
//                         tuits.liked = true;                 // set the tuit.liked to true
//                         tuits.likes++;                      // increment tuit.likes by 1
//                     }
//                     return tuits;                           // include new tuit changes in the array of tuits
//                 } else {                                    // otherwise
//                     return tuits;                           // keep old tuit object
//                 }
//             });
//         case 'delete-tuit':                                 // handles the delete-tuit event
//             return state.filter(                            // calculate new state
//                 tuit => tuit._id !== action.tuits._id);      // filter the tuit that is delited in the user interface
//         case 'create-tuit':                                 // handles the crete-tuit event
//             const newTuit = {                               // creates new tuit object with several default values i.e. _id, postedBy, username, etc.
//                 tuit: action.tuit,
//                 _id: (new Date()).getTime() + '',
//                 username: "Drae",
//                 handle: "@iluvdrae",
//                 attachments: {
//                     image: "/images/apple_logo.jpg"
//                 },
//                 logoImage: "/images/app-store-logo.png",
//                 avatarIcon: "/images/app-store-logo.png",
//                 comments: 20,
//                 retuits: 1115,
//                 likes: 222,
//                 replies: 333,
//             }
//             return [ newTuit,
//                 ...state,];
//         default:
//             return tuits;
//     }
// };
//
// export default tuitsReducer;