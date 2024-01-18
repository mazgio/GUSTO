import express from "express";
import { registerCustomerPost } from "../controllers/customerRegisterController.js";
import requiredValues from "../validators/requiredValues.js";
import checkValidation from "../validators/checkValidation.js";


// Import necessary modules and dependencies

const router = express.Router();

// Define requiredValues middleware
const validateFields = requiredValues(["username", "password", "emailAddress"]);

// Define route handling
router.post("/", validateFields, (req, res) => {
  console.log("POST request to /customer route");
  res.send("Customer registration successful!");
});


export default router;
