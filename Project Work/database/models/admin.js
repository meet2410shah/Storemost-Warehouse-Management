module.exports = require('mongoose').model(
	'Admin',
	require('mongoose').Schema({
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		mobile: { type: String, required: true },
		address: { type: String, default: " " },
		registerDate: { type: String, require: true },
	})
);
