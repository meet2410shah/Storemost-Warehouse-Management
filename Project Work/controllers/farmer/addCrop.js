const jwt = require('jsonwebtoken');
const { Farmer, Warehouse } = require('../../database/models/');

module.exports = async (req, res) => {
	const token = req.cookies.token;
	// Check the Existance of Token
	if (!token) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1001,
				msg: "User Does'nt exists",
			},
		});
	}

	// Check if Token is not corrupted
	let data = null;
	try {
		data = jwt.verify(token, process.env.SECRET);
	} catch (err) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1002,
				msg: 'Token is Corrupted',
			},
		});
	}

	// Check if the warehouse is there or not.
	const userId = data.userId;
	try {
		data = await Warehouse.find({
			warehouseId: req.body.warehouseId,
		});
	} catch (err) {
		return res.send({
			success: false,
			data: null,
			err: {
				code: 1007,
				msg: 'Database Error',
			},
		});
	}
	if (data.length === 0) {
		return res.send({
			success: false,
			data: null,
			err: {
				code: 1008,
				msg: "Warehouse does'nt exist",
			},
		});
	}
	const warehouseStorage = data[0].storage;

	try {
		data = await Farmer.find();
	} catch (err) {
		return res.send('error');
	}

	let total = 0;
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].crops.length; j++) {
			if (data[i].crops[j].warehouseId == req.body.warehouseId) {
				total += parseInt(data[i].crops[j].quantity);
				console.log(parseInt(data[i].crops[j].quantity));
			}
		}
	}
	if (total + req.body.quantity > warehouseStorage) {
		return res.send({
			success: false,
			data: null,
			err: {
				code: 1008,
				msg: 'Insufficient capacity',
				remaning: warehouseStorage - total,
			},
		});
	}

	// console.log('Remaining', warehouseStorage - total - req.body.quantity);
	const crop = {
		storageTime: Date.now(),
		quantity: req.body.quantity,
		warehouseId: req.body.warehouseId,
		paymentId: req.body.paymentId,
		cropType: req.body.cropType,
	};

	try {
		data = await Farmer.findOneAndUpdate(
			{ _id: userId },
			{
				$push: {
					crops: crop,
				},
			}
		);
	} catch (err) {
		return res.send({
			success: false,
			data: null,
			err: {
				code: 1007,
				msg: 'Not able to add the crop! Sorry of Inconvinence',
			},
		});
	}

	return res.send({
		success: true,
		data: {
			msg: 'Crop Added Successfully',
		},
		err: null,
	});
};
