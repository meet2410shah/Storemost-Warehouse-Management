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
	const users = req.body.users;
	// console.log(users);

	let wid1;
	users.forEach(async (data) => {
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

		const wid = Number(data.warehouseId);
		wid1 = wid

		// console.log(wid);
		// console.log(data);
		try {
			warehouse = await Warehouse.findOne({ warehouseId: wid });
			// console.log(warehouse);
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
			firstName: data.firstName,
			lastName: data.lastName,
			role: data.role,
			mobile: data.mobile,
			salary: data.salary,
			staffId: new Date().getTime(),
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
	});




	const warehousestaff = await Warehouse.findOne({ warehouseId: wid1 });
	// console.log(warehousestaff);
	const resObj = {
		success: true,
		data: warehousestaff.staffDetails,
		error: null,
	};
	res.send(resObj);
	// return res.send("go");
};

module.exports = addStaff;
