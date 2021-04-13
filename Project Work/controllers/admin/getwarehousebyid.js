const _ = require('lodash');
const { Warehouse } = require('../../database/models/');

// console.log(Warehouse);
const getWarehousesById = async function (req, res) {
	// console.log(req);
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1121,
			msg: 'No warehouse found with id',
		},
	};
	if (!req.body.warehouseId) {
		errRes.error = {
			code: 1122,
			msg: 'warehouse Id not found in request',
		};
		res.send(errRes);
	}
	const Warehouses = await Warehouse.findOne({ _id: req.body.warehouseId });
	console.log(Warehouses);
	if (!Warehouses) {
		errRes.error = {
			code: 1121,
			msg: 'No warehouse found with id',
		};
		res.send(errRes);
	}
	const resObj = {
		success: true,
		data: Warehouses,
		error: null,
	};
	res.send(resObj);
};

module.exports = getWarehousesById;
