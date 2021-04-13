const Joi = require('joi');

// This function checks the validity of the inputs of admin during registration

function validateUser(staff) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        salary: Joi.number().integer().required(),
        mobile: Joi.string().min(5).max(50).required()
            .pattern(/^[0-9]+$/),
        role: Joi.string().min(3).max(50).required(),
        staffId: Joi.number().integer().required()
    });

    return schema.validate(staff);
}

exports.validate = validateUser;
