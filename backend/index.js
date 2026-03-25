import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Success"
    })
})
dotenv.config();
connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Backend Running");
    
})


