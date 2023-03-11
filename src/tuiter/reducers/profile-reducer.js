import { createSlice } from "@reduxjs/toolkit";

const profile = {
    tuits: 11,
    firstName: "Jing",
    lastName: "Feng",
    handle: "@jingfeng",
    bannerPicture: "../../images/bg.jpg",
    profilePicture: "../../images/alice.jpg",
    bio: "NEU MSCS Align Student",
    website: "https://www.youtube.com/",
    location: "Sunnyvale, CA",
    dateOfBirth: "1/1/2023",
    dateJoined: "1/2023",
    followingCount: 22,
    followersCount: 333
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateUser(state, action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.handle = action.payload.handle;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
    }
);

export const {updateUser} = profileSlice.actions;
export default profileSlice.reducer;