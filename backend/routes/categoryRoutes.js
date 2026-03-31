import express from "express";
import { protect } from "../middlewares/protected.js";
import {upload} from "../middlewares/multer.js"
import { createCategory } from "../controllers/categoriesControllers.js";
const Router = express.Router();

Router.post("/createCategory", upload.fields([
    { name: "navImage", maxCount: 1 },
    { name: "banner", maxCount: 1 },
    { name: "offerBanner", maxCount: 1 },
  ]),protect, createCategory);

export default Router;