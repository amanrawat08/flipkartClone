import bcrypt from "bcryptjs";
import user from "../model/user.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export const loginAdmin = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                message: "Enter full Details",
            })
        }

        const checkUser = await user.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({
                message: "User not found",
            })
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password);
        // console.log(checkPassword);

        if (!checkPassword) {
            return res.status(400).json({
                message: "Invalid email or password",
            })
        }
        console.log(req.body);

        if (checkUser.role !== "admin") {
            return res.status(400).json({
                message: "Email or password is incorrect.",
            })
        }

        const token = jwt.sign({ id: checkUser._id }, process.env.SECRET_KEY, { expiresIn: "7d" });
        console.log(token);

        return res.status(200).cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",      // important
        }).json({
            checkUser,
            message: "Successfully login",
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}


//logout
export const logoutAdmin = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true, secure: false, // true in production (HTTPS)
        sameSite: "lax", path: "/"
    });
    return res.status(200).json({ message: "Logged out successfully" });
};


