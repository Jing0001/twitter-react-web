import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
    // name the reducer
    name: "who",
    // initialize the reducer's state
    initialState: whoArray
});

// export the reducer
export default whoSlice.reducer;
