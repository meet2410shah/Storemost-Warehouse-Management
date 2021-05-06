const Joi = require('joi');

// This function checks the validity of the inputs of admin during registration

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    username: Joi.string().min(5).max(50).required()
      .token(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required()
      .email(),
    mobile: Joi.string().min(5).max(50).required()
      .pattern(/^[0-9]+$/),
    warehouseId: Joi.string().min(1).max(10).required()
      .pattern(/^[0-9]+$/),
    confirmPassword: Joi.string().min(5).max(255).required(),
    registerDate: Joi.string().min(5).max(50),
    address: Joi.string().min(0).max(100),
  });

  return schema.validate(user);
}

exports.validate = validateUser;
