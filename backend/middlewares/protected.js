import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import user from "../model/user.js";
dotenv.config()
export const protect =async (req, res, next) => { 
    // console.log(req.cookies.token);
    
    let token = req.cookies.token;
   // console.log(req);
    
    if (!token) {
        return res.status(401).json({ message: "Not logged in" });
    }
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
    const fetchuser =await user.findById(decoded.id);
    req.user = fetchuser;
    
    
    next();

} 