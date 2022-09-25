import { check } from "express-validator";

const productValidator = () => {
  return [
    check("productName")
      .isLength({ min: 2 })
      .withMessage("Product Type should be greater than 2 characters."),
    check("productType")
      .isLength({ min: 2 })
      .withMessage("Product Type should be greater than 2 characters."),
    check("productDescription")
      // TODO: Check BOTH min and max in message.
      .isLength({ min: 10, max: 150 })
      .withMessage("Description should be atleast 10 characters long."),
  ];
};

export default productValidator;
