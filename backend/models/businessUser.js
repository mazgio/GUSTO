import mongoose from "mongoose";

const { Schema } = mongoose;

const businessUserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    userType: {
      type: String,
      required: true,
      enum: ["businessUsers", "customerUsers"],
      default: "businessUsers",
    },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    companyOwner: String,
    emailAddress: { type: String, required: true, unique: true },
    street: { type: String, required: true },
    zipCode: { type: Number, required: true },
    city: { type: String, required: true },
    businessTelephone: Number,
    // typeOfBusiness: { type: String, required: true },
    // companyHistory: String,
    products: [
      { type: mongoose.Types.ObjectId, required: true, ref: "Product" },
    ],
  },
  { timestamps: true }
);

const BusinessUser = mongoose.model("BusinessUser", businessUserSchema);

export default BusinessUser;
