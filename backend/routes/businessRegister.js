import express from "express";
import { registerBusinessPost } from "../controllers/businessRegisterController.js";
import requiredValues from "../validators/requiredValues.js";
import registerBusinessValidator from "../validators/registerBusinessValidator.js";
import checkValidation from "../validators/checkValidation.js";

const router = express.Router();

router.post(
  "/",
  requiredValues(["username", "firstName", "lastName", "companyName", "password", "emailAddress"]),
  registerBusinessValidator(),
  checkValidation,
  registerBusinessPost
);

export default router;
