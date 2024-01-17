// controllers/customerRegisterController.js
import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";

export const registerCustomerPost = async (req, res, next) => {
  console.log('Executing registerCustomerPost');

  const { firstName, lastName, username, emailAddress, password } = req.body;

  if (!username || !emailAddress || !password) {
    return next(createError(400, "Username, emailAddress, and password are required."));
  }

  let foundUsername;
  let foundEmail;

  try {
    foundUsername = await CustomerUser.findOne({ username: username });
    foundEmail = await CustomerUser.findOne({ emailAddress: emailAddress });
  } catch {
    return next(createError(500, "Database could not be queried. Please try again!"));
  }

  if (foundUsername) {
    return next(createError(409, `${username} has already been taken. Please try a different username!`));
  }

  if (foundEmail) {
    return next(createError(412, `${emailAddress} address has already been used to create an account. Please try a different email address!`));
  }

  const newUser = new CustomerUser({
    firstName: firstName,
    lastName: lastName,
    username: username,
    emailAddress: emailAddress,
    password: password,
    isAdmin: false,
  });

  try {
    await newUser.save();
    res.status(201).json({ id: newUser._id });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle validation errors (e.g., required fields missing)
      return next(createError(422, error.message));
    }
    // Handle other unexpected errors
    return next(createError(500, `New user could not be created. Please try again!`));
  };
};