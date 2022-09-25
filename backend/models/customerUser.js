import mongoose from "mongoose";

const { Schema } = mongoose;

const customerUserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true, unique: true },
  userType: {
    type: String, required: true, enum: ["businessUsers", "customerUsers"],
    default: "customerUsers"
  },
  emailAddress: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteBusiness: [{ businessName: String }],
  favoriteProducts: [{ productName: String }],
  isAdmin: { type: Boolean, required: true },
}, { timestamps: true });

const CustomerUser = mongoose.model("CustomerUser", customerUserSchema);

// TODO: Encryption for the password field is not yet implemented.

//CustomerUserSchema.pre();

export default CustomerUser;
