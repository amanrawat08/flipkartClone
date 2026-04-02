import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories.jsx";
const store = configureStore({
    reducer:{
        categories:categoriesReducer, 
    }
})

export default store;