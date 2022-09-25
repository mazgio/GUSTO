import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";

export const registerCustomerPost = async (req, res, next) => {
  const { firstName, lastName, username, emailAddress, password } = req.body;

  let foundUsername;

  // try to find the username
  try {
    foundUsername = await CustomerUser.findOne({
      username: username,
    });
  } catch {
    return next(
      createError(500, "Could not query database. Please try again!")
    );
  }

  if (foundUsername) {
    return next(
      createError(
        409,
        `${username} has already been taken. Please try a different username!`
      )
    );
  }

  let foundEmail;

  // try to find the emailAddress
  try {
    foundEmail = await CustomerUser.findOne({ emailAddress: emailAddress });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again!")
    );
  }

  if (foundEmail) {
    return next(
      createError(
        412,
        `${emailAddress} address has already been used to create an account. Please try a different email address!`
      )
    );
  }

  // create a new user
  const newUser = new CustomerUser({
    firstName: firstName,
    lastName: lastName,
    username: username,
    emailAddress: emailAddress,
    password: password,
    favoriteBusiness: [],
    favoriteProducts: [],
    isAdmin: false
  });

  try {
    await newUser.save();
  } catch {
    return next(
      createError(500, `New user could not be created. Please try again!`)
    );
  }

  res.status(201).json({ id: newUser._id });
};
