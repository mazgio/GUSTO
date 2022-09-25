import { check } from "express-validator";

const registerBusinessValidator = () => {
  return [
    // check username
    check("username")
      .escape()
      .isLength({ min: 3, max: 10 })
      .trim()
      .withMessage("Username must be between 3 and 10 characters long!"),
    // check password
    check("password")
      .escape()
      .trim()
      .isStrongPassword({ minLength: 8, minLowerCase: 2 })
      .withMessage(
        "Password is not valid! Must be minimum 8 characters long and include two lowercase, one uppercase, one symbol (e.g. @, !, # etc) and one number."
      ),
    // check company name
    check("companyName").escape(),
    // check business owner
    check("companyOwner")
      .escape(),
    // check email address
    check("emailAddress")
      .normalizeEmail()
      .isEmail()
      .withMessage("Email address is not valid!"),
    // check address
    check("street").escape(),
    check("zipCode").isNumeric(),
    check("city").escape().trim(),
    // check business telephone
    check("businessTelephone")
      .isNumeric()
      .isLength({ min: 5 })
      .withMessage("Telephone details must be a number!"),
  ];
};

export default registerBusinessValidator;
