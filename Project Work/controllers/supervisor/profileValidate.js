const Joi = require("joi");

// This function checks the validity of the inputs of admin during registration

function profileValidate(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50),
    lastName: Joi.string().min(3).max(50),
    // username: Joi.string().min(5).max(50).token(),
    // password: Joi.string().min(5).max(255),
    // email: Joi.string().min(5).max(255).email(),
    mobile: Joi.string()
      .min(5)
      .max(50)
      .pattern(/^[0-9]+$/),
    warehouseId: Joi.string()
      .min(1)
      .max(10)
      .pattern(/^[0-9]+$/),
    // confirmPassword: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

exports.profileValidate = profileValidate;
