// controllers/customerRegister.js
import express from "express";
import requiredValues from "../validators/requiredValues.js";
import checkValidation from "../validators/checkValidation.js";
import { registerCustomerPost } from "../controllers/customerRegisterController.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET request to /customer route");
  res.send("I am the register customer route");
});

router.post("/", requiredValues(["username", "password", "emailAddress"]), checkValidation, registerCustomerPost);

export default router;
