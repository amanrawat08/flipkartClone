import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; 
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Success"
    })
})

app.use('/api', userRoutes); 

dotenv.config();
connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Backend Running");
    
})


