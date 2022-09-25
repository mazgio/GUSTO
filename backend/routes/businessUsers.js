import express from "express";
import { deleteProduct, getBusinessData, updateProducts } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getBusinessData);

// PATCH a product
router.patch("/:id/products", updateProducts)

// DELETE a product
router.delete("/:id/products/:productId", deleteProduct)

export default router;
