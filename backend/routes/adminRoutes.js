import express from "express";
import { registerAdmin } from "../controllers/adminController.js";

const Router = express.Router();

Router.post("/register",registerAdmin)

export default Router;