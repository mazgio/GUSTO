// routes/customerRegisterRoute.js
import express from "express";
import { registerCustomerPost } from "../controllers/customerRegisterController.js";
import requiredValues from "../validators/requiredValues.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET request to /customer route");
  res.send("I am the register customer route");
});

router.post("/", requiredValues(["username", "password", "emailAddress"]), registerCustomerPost, (req, res) => {
  console.log("POST request to /customer route");
  res.send("Customer registration successful!");
});

export default router;
