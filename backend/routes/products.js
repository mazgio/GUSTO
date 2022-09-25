import express from "express";
import { productPost } from "../controllers/productController.js";

const router = express.Router();

router.post("/", productPost)

export default router;
