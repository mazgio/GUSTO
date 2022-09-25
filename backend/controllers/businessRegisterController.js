import createError from "http-errors";
import BusinessUser from "../models/businessUser.js";

export const registerBusinessPost = async (req, res, next) => {
  const {
    username,
    firstName,
    lastName,
    password,
    companyName,
    companyOwner,
    emailAddress,
    street,
    zipCode,
    city,
    businessTelephone,
  } = req.body;

  let foundUsername;

  // try to find the username
  try {
    foundUsername = await BusinessUser.findOne({
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
    foundEmail = await BusinessUser.findOne({ emailAddress: emailAddress });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again!")
    );
  }

  if (foundEmail) {
    return next(
      createError(
        412,
        `${emailAddress} has already been used to create an account. Please try a different email address!`
      )
    );
  }

  // create a new business
  const newBusinessUser = new BusinessUser({
    username: username,
    firstName: firstName,
    lastName: lastName,
    password: password,
    companyName: companyName,
    companyOwner: companyOwner,
    emailAddress: emailAddress,
    street: street,
    zipCode: zipCode,
    city: city,
    businessTelephone: businessTelephone,
  });

  try {
    await newBusinessUser.save();
  } catch {
    return next(
      createError(500, `New user could not be created. Please try again!`)
    );
  }

  res.status(201).json({ id: newBusinessUser._id });
};
