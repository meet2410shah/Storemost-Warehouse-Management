// const bcrypt = require('bcrypt');
// const _ = require('lodash');
const { Supervisor, Warehouse } = require('../../database/models/');
const { checkCookie } = require('../cookies/checkCookie');

// const { User } = require('../../database/models/warehouse.js');

// const { validate } = require('./validate');
// const { errorCustom } = require('../error/error');

const staffList = async (req, res) => {
	const objt = checkCookie(req.cookies);

	// if(objt!=0){

	const mainObj = JSON.parse(objt.cookiedata).userEmail;

	var n = -1;

	n = mainObj.indexOf('@');

	let mainUser = [];

	if (n != -1) {
		mainUser = await Supervisor.find({ email: mainObj });
	} else {
		mainUser = await Supervisor.find({ username: mainObj });
	}

	const ware = Warehouse.find({ description: mainUser[0].warehouseId });

	let list = [];

	ware[0].staffDetails.forEach(function (item) {
		let staffOne = new Object();

		staffOne.firstName = item.firstName;
		staffOne.lastName = item.lastName;
		staffOne.mobile = item.mobile;
		staffOne.role = item.role;
		list.push(staffOne);
	});

	res.send(list);

	// }
	// else{
	// res.redirect("/login");
	// }
};

exports.staffList = staffList;
