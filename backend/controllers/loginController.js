import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";
import BusinessUser from "../models/businessUser.js";
import jwt from "jsonwebtoken";

export const loginPost = async (req, res, next) => {
  const { username, password } = req.body;

  let foundUser;

  // try to find the user in the CustomerUser collection, if !found try the BusinessUser collection
  try {
    foundUser = await CustomerUser.findOne({
      username: username,
      password: password,
    });

    if (!foundUser) {
      try {
        foundUser = await BusinessUser.findOne({
          username: username,
          password: password,
        });
        console.log("FoundUser", foundUser);
      } catch {
        return next(
          createError(500, "Database couldn't be queried. Please try again")
        );
      }
    }
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }
  if (foundUser) {
    const token = jwt.sign(
      { username: foundUser.username, id: foundUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({
      id: foundUser._id,
      userType: foundUser.userType,
      username: foundUser.username,
      companyName: foundUser.companyName,
      token,
    });
  } else {
    return next(createError(500, "User not found"));
  }
};

// TODO Encryption missing.

// TOKEN????

// TODO Response for user-mistake.
