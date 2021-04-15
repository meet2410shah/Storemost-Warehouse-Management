const _ = require('lodash');
const { Warehouse } = require('../../database/models');

const ListStaff = async function (req, res) {
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
			warehouseId: wid
		});
	} catch {
		errRes.error = {
			code: 1111,
			msg: "Warehouse not found in databse"
		}
		return res.send(errRes);
	}
	if (!warehouselist) {
		errRes.error = {
			code: 1111,
			msg: "Warehouse not found in databse"
		}
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
			msg: "No staff found with given warehouse"
		}
	}
	if (!StaffList) {
		errRes.error = {
			code: 1065,
			msg: "No staff found with given warehouse"
		}
		return res.send(errRes);
	}
	const resObj = {
		success: true,
		data: StaffList.staffDetails,
		error: null,
	};
	res.send(resObj);
};

module.exports = ListStaff;
