import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
const app = express();
app.use(express.json());

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


