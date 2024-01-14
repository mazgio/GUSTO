import createError from "http-errors";
import BusinessUser from "../models/businessUser.js";

export const getBusinessData = async (req, res, next) => {
  // retrieve the :id parameter from the request
  const userId = req.params.id;
  console.log("User ID:", userId);

  let foundUser;

  try {
    foundUser = await BusinessUser.findById(userId);
  } catch (error) {
    console.error("Error querying database:", error);
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