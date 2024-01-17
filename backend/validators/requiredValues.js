
// requiredValues.js

const requiredValues = (fields) => (req, res, next) => {
  console.log("requiredValues middleware executed");

  const missingFields = fields.filter(field => !(req.body[field] || req.query[field]));

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  next();
};

export default requiredValues;
