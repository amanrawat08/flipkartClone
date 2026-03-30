import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice.jsx";
export const store = configureStore({
    reducer:{
        admin: userSlice
    }
})