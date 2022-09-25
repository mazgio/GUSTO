import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";

export const getUserData = async (req, res, next) => {
  // retrieve the :id parameter from the request

  const userId = req.params.id;

  let foundUser;

  try {
    foundUser = await CustomerUser.findById(userId);
  } catch {
    return next(
      createError.InternalServerError(
        "Could not query database. Please try again!"
      )
    );
  }

  if (foundUser) {
    const userData = {
      firstName: foundUser.firstName,
    };

    res.json(userData);
  } else {
    return next(createError.NotFound("User could not be found."));
  }
};
