const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { Warehouse, Farmer } = require('../../database/models');

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

	// console.log(req);
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

		// console.log(warehouselist);
	} catch {
		errRes.error = {
			code: 1061,
			msg: 'Warehouse not found in database',
		};
		return res.send(errRes);
	}
	// console.log(warehouse);
	if (!warehouselist) {
		errRes.error = {
			code: 1061,
			msg: 'Warehouse not found in database',
		};
		return res.send(errRes);
	}

	let FarmersList;
	try {
		FarmersList = await Farmer.find();
		// console.log(FarmerList);
	} catch {
		errRes.error = {
			code: 1064,
			msg: 'No Farmer found in given warehouse',
		};
		return res.send(errRes);
	}

	if (!FarmersList) {
		errRes.error = {
			code: 1064,
			msg: 'No Farmer found in given warehouse',
		};
		return res.send(errRes);
	}
	// console.log(FarmersList);

	var farmers = [];
	for (var f = 0; f < FarmersList.length; f++) {
		var flag = 0;
		for (var c = 0; c < FarmersList[f].crops.length; c++) {
			if (FarmersList[f].crops[c].warehouseId == wid) {
				flag = 1;
			}
		}
		if (flag) {
			farmers.push(
				_.pick(FarmersList[f], [
					'firstName',
					'lastName',
					'username',
					'mobile',
					'email',
				])
			);
		}
	}
	if (farmers.length == 0) {
		errRes.error = {
			code: 1064,
			msg: 'No Farmer found in given warehouse',
		};
		return res.send(errRes);
	}
	// console.log(farmers);
	const resObj = {
		success: true,
		data: farmers,
		error: null,
	};

	return res.render('./Admin/FarmerList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: user,
			wid: wid,
			FarmerList: farmers,
		},
	});

	res.send(resObj);
};

function getfarmers(FarmersList, warehouseId) {
	var farmers = [];
	for (var f = 0; f < FarmersList.length; f++) {
		var flag = 0;
		for (var c = 0; c < FarmersList[f].crops.length; c++) {
			if (FarmersList[f].crops[c].warehouseId == warehouseId) {
				flag = 1;
			}
		}
		if (flag) {
			farmers.push(
				_.pick(FarmersList[f], [
					'firstName',
					'lastName',
					'username',
					'mobile',
					'email',
				])
			);
		}
	}
	return farmers;
}
