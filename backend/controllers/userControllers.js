import user from "../model/user.js";
import bcrypt from "bcryptjs";


export const register = async(req, res)=>{
    console.log(req.body);
    
    const {email,name, role, password} = req.body;

    if(!email || !name || !role || !password){
        return res.status(401).json({
            status:"fail",
            message:"Enter Full details"
        })
    }

    const duplicate = await user.findOne({email});

    if(duplicate) {
        return res.status(400).json({
            message:"User already exist"
        })
    }

    const hashedPassword =await bcrypt.hash(password, 16);

    const newUser = await user.create({email,name,role, password:hashedPassword});

    res.status(200).json({
        message:"User successfullt Build"
    })

}