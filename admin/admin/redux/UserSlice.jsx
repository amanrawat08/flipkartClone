import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_FRONT } from "../src/utils/comman";


// Refresh 
export const loadUser = createAsyncThunk("/me", async(_, thrunkAPI)=>{
    try {
       const res = await axios.get(`${API_FRONT}/me`, {
        withCredentials:true
       });
       return res.data;
    } catch (error) {
        console.log("Something went wrong!!!");
        return thrunkAPI.rejectWithValue(null)
        
    }
})


const userSlice = createSlice({
    name:"admin",
    initialState:{
        admin:null,
        isLoading:true,
        isAuthenticated:false
    },
    reducers:{
        setAdmin:(state, action)=>{
            state.admin = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false
        },
        
    },
    extraReducers:(builder)=>{
        builder.addCase(loadUser.pending, (state)=>{
            state.isLoading = true
        }).addCase(loadUser.fulfilled, (state, action)=>{
            state.admin = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        }).addCase(loadUser.rejected, (state, action)=>{
            state.admin = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        })
    }
})


export const {setAdmin} = userSlice.actions;
export default userSlice.reducer;