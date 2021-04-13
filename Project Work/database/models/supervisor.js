module.exports = require('mongoose').model(
	'Supervisor',
	new require('mongoose').Schema({
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		mobile: { type: String, required: true },
		warehouseId: { type: Number, required: true },
	})
);
