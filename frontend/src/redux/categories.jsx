import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit"
import { BACKEND_URL } from "../utils/comman.jsx";
import axios from "axios" 

const getCategoies = createAsyncThunk("getcategoies",async(_, thrunkAPI)=>{
    try {
        const res = await axios.get(`${BACKEND_URL}/getCategies`);
        console.log(res?.data?.allCategories);      
        return res.data.allCategories;
    } catch (error) {
        console.log("Something went Wrong!!!");
        return thrunkAPI.rejectWithValue(null)
        
    }
})

const categoriesSlice = createSlice({
    name:"Category",
    initialState :{
        categories: null,
        isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategoies.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getCategoies.fulfilled, (state, action)=>{
            state.categories = action.payload;
            state.isLoading = false;
        }).addCase(getCategoies.rejected, (state, action)=>{
            state.categories = null;
            state.isLoading = false;
        })

    }
    
})

export {getCategoies};
export default categoriesSlice.reducer;