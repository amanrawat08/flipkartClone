import { loginAdmin } from "../controllers/adminController.js";
import { register } from "../controllers/userControllers.js";
import express from "express";

const router = express.Router();

router.post('/register', register);
router.post('/admin/login', loginAdmin);

export default router;
