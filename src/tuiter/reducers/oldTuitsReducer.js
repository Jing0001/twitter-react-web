import {createSlice} from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa.jpg"
};

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
    initialState: tuits,
    // A reducer is a pure function in Redux that takes the current state and an action as arguments,
    // and returns a new state based on the action type, responsible for updating the state in response to dispatched actions
    reducers: {
        createTuit(state, action) {
            state.unshift({
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
