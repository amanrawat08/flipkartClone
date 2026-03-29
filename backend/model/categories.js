import mongoose from "mongoose";

const categorySlice = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    banners:[
        {
            url:String,
            public_id:String
        }
    ],
})