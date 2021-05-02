const { all } = require('lodash');
const _ = require('lodash');
const { Warehouse } = require('../../database/models/');
const { validate } = require('./validateStaff');

const addStaff = async function (req, res) {
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1055,
			msg: 'warehouseId require to add staff',
		},
	};
	// console.log(errRes);
	var arr = [
		'warehouseId',
		'firstName',
		'lastName',
		'salary',
		'role',
		'mobile',
	];
	const data = req.body;
	// console.log(data);

	for (var i = 0; i < arr.length; i++) {
		// console.log(arr[i] in data);
		if (!(arr[i] in data)) {
			errRes.error = {
				code: 1055 + i,
				msg: arr[i] + ' require to add staff',
			};
			return res.send(errRes);
		}
	}

	const wid = Number(req.body.warehouseId);

	console.log(wid);
	// console.log(data);
	try {
		warehouse = await Warehouse.findOne({ warehouseId: wid });
		console.log(warehouse);
	} catch (MongoError) {
		errRes.error = {
			code: 1056,
			msg: 'warehouse not found with given warehouseId',
		};
		return res.send(errRes);
	}
	if (!warehouse) {
		errRes.error = {
			code: 1056,
			msg: 'warehouse not found with given warehouseId',
		};
		return res.send(errRes);
	}

	const staff = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		role: req.body.role,
		mobile: req.body.mobile,
		salary: req.body.salary,
		staffId: warehouse.staffDetails.length + 1,
	};

	const { error } = await validate(staff);
	if (error) {
		errRes.error = {
			code: 400,
			msg: error.details[0].message,
		};
		return res.send(errRes);
	}

	const check = await Warehouse.findOneAndUpdate(
		{ warehouseId: wid },
		{ $push: { staffDetails: staff } }
	);

	if (!check) {
		errRes.error = {
			code: 1062,
			msg: 'cannot add staff member to warehouse',
		};
	}
	const warehousestaff = await Warehouse.findOne({ warehouseId: wid });
	// console.log(warehousestaff);
	const resObj = {
		success: true,
		data: warehousestaff.staffDetails,
		error: null,
	};
	res.send(resObj);
};

module.exports = addStaff;
