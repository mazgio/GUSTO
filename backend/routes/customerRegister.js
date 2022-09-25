import express from "express";
import { registerCustomerPost } from "../controllers/customerRegisterController.js";
import requiredValues from "../validators/requiredValues.js";
import registerCustomerValidator from "../validators/registerCustomerValidator.js";
import checkValidation from "../validators/checkValidation.js";

const router = express.Router();

router.post(
  "/",
  requiredValues(["username", "password", "emailAddress"]),
  registerCustomerValidator(),
  checkValidation,
  registerCustomerPost
);

export default router;
