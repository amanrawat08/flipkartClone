import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const Router = express.Router();

Router.post("/login",loginAdmin)

export default Router;