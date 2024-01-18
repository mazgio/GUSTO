// requiredValues.js
const requiredValues = (fields) => (req, res, next) => {
  console.log("Inside requiredValues middleware");

  const missingFields = fields.filter((field) => !(field in req.body));

  if (missingFields.length > 0) {
    console.log("Missing required fields:", missingFields);
    return res.status(400).json({ error: "Missing required fields" });
  }

  // If all required fields are present, move to the next middleware
  next();
};

export default requiredValues;
