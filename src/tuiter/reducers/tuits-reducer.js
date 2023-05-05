import {createSlice} from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json";

// create an object that represents the currently logged in user
// which contains profile information username, their avatar logo, and handle.
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa.jpg"
};

// create a template tuit object with some default values
// and copy over the fields userName, handle and image from the currentUser
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
}

const tuitsSlice = createSlice({
    name: 'tuits',
    // set initialState to be the tuits in json file
    initialState: tuits,
    reducers: {
        // createTuit reducer function: appends the new tuit in the payload
        // at the beginning of the array of tuits contained in the state.
        createTuit(state, action) {
            state.unshift({
                // copy all fields from templateTuit and initialize the unique identifier with a timestamp
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime()
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        likeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].likes += 1;
        },
        unlikeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].likes -= 1;
        },
    }
});

export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
