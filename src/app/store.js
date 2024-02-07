import { configureStore } from "@reduxjs/toolkit";
import locationDataSlice from "../reducers/locationDataSlice";

export default configureStore({
    reducer: {
        user:locationDataSlice, 
    },
});