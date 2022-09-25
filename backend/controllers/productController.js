import createError from "http-errors";
import Product from "../models/product.js";


export const productPost  = async (req, res, next) => {
    // create a new product

        let newProduct;
        
        try {
            newProduct = new Product(req.body);
            await newProduct.save()
        } catch {
            return next(createError(500, "Product could not be created. Please try again!"))
        }

        res.status(201).json({id: newProduct._id})
   
} 