import { createSlice } from "@reduxjs/toolkit";

export const locationsDataSlice = createSlice({
    name:"locationsData",
    initialState: {
        data: [],
    },
    reducers: {
        locationsData(state, action) {
            state.data = action.payload;
        },
    },
});

export const { locationsData } = locationsDataSlice.actions;

export const selectData = (state) => state.user.data;

export default locationsDataSlice.reducer;