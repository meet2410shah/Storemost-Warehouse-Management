const { all } = require('lodash');
const _ = require('lodash');
const { Warehouse } = require('../../database/models/');
const { validate } = require('./validatewarehouse');

const addWarehouse = async function (req, res) {
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1052,
			msg: 'Warehouse name is empty',
		},
	};
	if (!req.body.name) {
		return res.send(errRes);
	}
	if (!req.body.storage) {
		errRes.error = {
			code: 1053,
			msg: 'storage is empty',
		};
		return res.send(errRes);
	}
	if (!req.body.address) {
		errRes.error = {
			code: 1054,
			msg: 'address is empty',
		};
		return res.send(errRes);
	}

	let warehouse = {
		name: req.body.name,
		storage: Number(req.body.storage),
		location: {
			address: req.body.address,
		},
	};
	const { error } = validate(warehouse);
	if (error) {
		errRes.error = {
			code: 400,
			msg: error.details[0].message,
		};
		return res.send(errRes);
	}
	warehouse.warehouseId = (await Warehouse.count()) + 1;
	// console.log(warehouse);
	try {
		warehouse = new Warehouse(warehouse);
		await warehouse.save();
	} catch (MongoError) {
		errRes.error = {
			code: 1063,
			msg: "cannot add to database"
		}
		return res.send(errRes);
	}


	const warehouses = await Warehouse.find({});
	// console.log(warehouses);
	const resObj = {
		success: true,
		data: warehouses,
		error: null,
	};
	res.send(resObj);
};

module.exports = addWarehouse;
