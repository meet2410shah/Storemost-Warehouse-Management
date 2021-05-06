const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { Warehouse } = require('../../database/models');

module.exports = async function (req, res) {
	const token = req.cookies.token;
	if (!token) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1001,
				msg: 'user not logged in',
			},
		});
	}

	// Generate the User
	const { user } = jwt.verify(token, process.env.SECRET);
	if (!user) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1002,
				msg: 'User not Verified',
			},
		});
	}

	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1100,
			msg: 'Email not added in request',
		},
	};
	const wid = req.body.warehouseId;
	if (!wid) {
		errRes.error = {
			code: 1110,
			msg: 'Warehouse id not found in request',
		};
		return res.send(errRes);
	}
	let warehouselist;
	try {
		warehouselist = await Warehouse.findOne({
			warehouseId: wid,
		});
	} catch {
		errRes.error = {
			code: 1111,
			msg: 'Warehouse not found in databse',
		};
		return res.send(errRes);
	}
	if (!warehouselist) {
		errRes.error = {
			code: 1111,
			msg: 'Warehouse not found in databse',
		};
		return res.send(errRes);
	}

	let StaffList;
	try {
		StaffList = await Warehouse.findOne({
			warehouseId: wid,
		});
	} catch {
		errRes.error = {
			code: 1065,
			msg: 'No staff found with given warehouse',
		};
	}
	if (!StaffList) {
		errRes.error = {
			code: 1065,
			msg: 'No staff found with given warehouse',
		};
		return res.send(errRes);
	}
	const resObj = {
		success: true,
		data: StaffList.staffDetails,
		error: null,
	};

	return res.render('./Admin/StaffList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: user,
			wid: wid,
			StaffList: StaffList.staffDetails,
		},
	});
	res.send(resObj);
};
