import bcrypt from "bcryptjs";



export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                message: "Enter full Details",
            })
        }

        const checkUser = await admin.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({
                message: "User not found",
            })
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Invalid email or password",
            })
        }

        return res.status(200).json({
            checkUser,
            message: "Successfully login",
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server erro",
        })
    }
}

