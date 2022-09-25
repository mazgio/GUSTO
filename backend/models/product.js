import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  productType: { type: String, required: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  selectedFile: String,
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
