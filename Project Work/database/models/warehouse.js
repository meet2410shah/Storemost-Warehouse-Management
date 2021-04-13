module.exports = require('mongoose').model(
	'Warehouse',
	new require('mongoose').Schema({
		warehouseId: { type: Number, unique: true, required: true, dropDups: true },
		name: { type: String, required: true },
		location: {
			address: { type: String, required: true },
			longitude: { type: Number, default: 0.0 },
			latitude: { type: Number, default: 0.0 },
		},
		storage: { type: Number, required: true },
		staffDetails: [
			{
				staffId: { type: Number, unique: true, required: true, dropDups: true },
				firstName: { type: String, required: true },
				lastName: { type: String, required: true },
				salary: { type: Number, required: true },
				role: { type: String, required: true },
				mobile: { type: String, required: true },
			},
		],
	})
);
