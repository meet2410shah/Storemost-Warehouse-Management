const Joi = require('joi');

// This function checks the validity of the inputs of admin during registration

function validateWarehous(warehouse) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        storage: Joi.number().integer().required(),
        location: {
            address: Joi.string().min(3).max(200).required(),
            longitude: Joi.number().precision(8),
            latitude: Joi.number().precision(8),
        },

    });

    return schema.validate(warehouse);
}

exports.validate = validateWarehous;
