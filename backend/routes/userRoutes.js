import { loginAdmin, logoutAdmin } from "../controllers/adminController.js";
import { register } from "../controllers/userControllers.js";
import express from "express";
import { protect } from "../middlewares/protected.js";

const router = express.Router();

router.post('/register', register);
router.post('/admin/login', loginAdmin);
router.get('/admin/logout',protect, logoutAdmin);
router.get('/admin/me',protect  ,(req,res)=>{
    return res.status(200).json({
        user:req.user,
        message:"Successfully Fetched...!!!"
    })
});

export default router;
