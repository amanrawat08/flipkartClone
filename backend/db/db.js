import mongoose from "mongoose"
import dotenv from "dotenv"
export const connectDB = async (params) => {
    dotenv.config();
    try {
        const connect = mongoose.connect(process.env.MONGO_URL);
        console.log("Successfully connect DB");
        
    } catch (error) {
        console.log("Fail to connect DB");
    }
}