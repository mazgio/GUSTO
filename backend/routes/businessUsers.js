import express from "express";
import { getBusinessData } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getBusinessData);


export default router;
