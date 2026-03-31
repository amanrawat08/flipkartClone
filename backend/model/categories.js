import mongoose from "mongoose";

const categorySlice = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    mainImg: {
        type: String,
    },
    banner:{
        type: String, 
        required:true
    },
    offerBanner:{
        type:String,
        required:true
    },
    navImg:{
        type:String,
        required:true
    }
}, { timestamps: true })

export default mongoose.model("Category", categorySlice);