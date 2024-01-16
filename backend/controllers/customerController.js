import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";

export const getUserData = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const foundUser = await CustomerUser.findById(userId);

    if (foundUser) {
      const userData = {
        firstName: foundUser.firstName,
        // Add other fields as needed
      };

      return res.json(userData);
    } else {
      return next(createError.NotFound("User could not be found."));
    }
  } catch (error) {
    console.error("Error querying database:", error);
    return next(
      createError.InternalServerError(
        "Could not query database. Please try again!"
      )
    );
  }
};
