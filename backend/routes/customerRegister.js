// routes/customerRegisterRoute.js
import express from "express";
import { registerCustomerPost } from "../controllers/customerRegisterController.js";
import requiredValues from "../validators/requiredValues.js";
import checkValidation from "../validators/checkValidation.js";

const router = express.Router();


router.post("/", requiredValues(["username", "password", "emailAddress"]), checkValidation, registerCustomerPost, (req, res) => {
  console.log("POST request to /customer route");
  res.send("Customer registration successful!");
});

export default router;
