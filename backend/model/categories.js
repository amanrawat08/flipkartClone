import mongoose from "mongoose";

const categorySlice = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    slug:{
        type:String,
        unique:true,
        require:true
    },
    mainImg: {
        type: String,
        require: true
    },
    posterImages:{
        url: String,
        public_id: String,
        require:true
    },
    offerPosters:{
        type:String,
        require:true
    },
    cartonImg:{
        type:String,
        require:true
    }
})

export default mongoose.model("Category", categorySlice);