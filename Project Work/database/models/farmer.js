module.exports = require('mongoose').model(
	'Farmer',
	 require('mongoose').Schema({
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		mobile: { type: String, required: true },
		crops: [
			{
				cropType: { type: String, required: true },
				warehouseId: { type: Number, required: true },
				quantity: { type: Number, required: true },
				depositDate: { type: Date, default: Date.now(), required: true },
				dueDate: { type: Date, default: Date.now(), required: true },
				description: { type: String },
				amount: { type: Number, required: true },
				orderId: { type: String, required: true },
				paymentId: { type: String, required: true },
			},
		],
	})
);
