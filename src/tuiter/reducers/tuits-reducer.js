import {createSlice} from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json";
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

// move this template to controller
// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "../../images/nasa.jpg"
// };

// move this template to controller
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
//     "dislikes": 0,
//     "disliked": false
// }

const tuitsSlice = createSlice({
    name: 'tuits',
    // in a7, initialState is set as the tuits
    // initialState: tuits,
    // in a8, initialState is an object
    initialState,
    // define asynchronous reducers
    extraReducers: {
        // if request is not yet fulfilled
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        // when we get response
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        // if request times out, or responds with error
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        // when server responds payload contains new tuit, clear loading flag, append new tuit to tuits array
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.unshift(payload)
            },
        // merge old tuit with updated tuit
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },
    // reducers: {
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime()
    //         })
    //     },
    //     deleteTuit(state, action) {
    //         const index = state.findIndex(tuit => tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     likeTuit(state, action) {
    //         const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
    //         state[tuitIndex].liked = true;
    //         state[tuitIndex].likes += 1;
    //     },
    //     unlikeTuit(state, action) {
    //         const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
    //         state[tuitIndex].liked = false;
    //         state[tuitIndex].likes -= 1;
    //     },
    //     dislikeTuit(state, action) {
    //         const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
    //         state[tuitIndex].disliked = true;
    //         state[tuitIndex].dislikes += 1;
    //     },
    //     undislikeTuit(state, action) {
    //         const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
    //         state[tuitIndex].disliked = false;
    //         state[tuitIndex].dislikes -= 1;
    //     },
    // }
});

// export const {createTuit, deleteTuit, likeTuit, unlikeTuit, dislikeTuit, undislikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
