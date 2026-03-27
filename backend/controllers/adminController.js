import admin from "../model/admin.js";
import bcrypt from "bcryptjs";
export const registerAdmin = async(req,res)=>{
    
    try {
        let {email, password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                message:"Enter Full data"
            })
        }
        const hashedPass = await bcrypt.hash(password, 16)
        const adminDAta =await  admin.create({email,password:hashedPass});
        return res.status(200).json({
            message:"Successfully created"
        })

    } catch (error) {
        return res.status(500).json({
            message:"Internal Error "
        })
    }

}