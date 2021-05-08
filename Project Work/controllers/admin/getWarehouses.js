// req.params
// req.query
const { _filter } = require('lodash');
const _ = require('lodash');
const { Warehouse, Farmer } = require('../../database/models');
const farmer = require('../../database/models/farmer');

const jwt = require('jsonwebtoken');

function compare(a, b) {
	if (a.available < b.available) {
		return -1;
	}
	if (a.available > b.available) {
		return 1;
	}
	return 0;
}

const getWarehouses = async function (req, res) {
	const token = req.cookies.token;
	// Check the Existance of Token
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
	const { user } = jwt.verify(token, process.env.SECRET);

	if (!user) return res.send('ERROR');

	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1120,
			msg: 'No warehouse found',
		},
	};
	let sortfilter = {
		sort: 'asc',
		filter: 'name',
	};

	if (req.query.sort) {
		sortfilter.sort = req.query.sort;
	}
	if (req.query.filter) {
		sortfilter.filter = req.query.filter;
	}

	const sortObj = {};

	let typ = 1;
	if (sortfilter.sort == 'desc') {
		typ = -1;
	}
	sortObj[sortfilter.filter] = sortfilter.sort;
	// console.log(sortObj);
	let warehouses;
	if (sortfilter.filter == 'storage')
		warehouses = await Warehouse.find()
			.select({ warehouseId: 1, name: 1, storage: 1, location: 1, _id: 0 })
			.sort(sortObj);
	else {
		warehouses = await Warehouse.aggregate([
			{
				$project: {
					_id: 0,
					lname: { $toLower: '$name' },
					location: 1,
					storage: 1,
					name: 1,
					warehouseId: 1,
				},
			},
			{ $sort: { lname: typ } },
			{
				$project: {
					_warehouseId: '$warehouseId',
					_name: '$name',
					_storage: '$storage',
					_location: '$location',
				},
			},
			{
				$project: {
					warehouseId: '$_warehouseId',
					name: '$_name',
					storage: '$_storage',
					location: '$_location',
				},
			},
		]);
	}

	// console.log(warehouses);
	if (!warehouses) {
		return res.send(errRes);
	}
	const farmer = await Farmer.find();
	// console.log(farmer);

	for (var i = 0; i < warehouses.length; i++) {
		var total = 0;
		for (var f = 0; f < farmer.length; f++) {
			for (var j = 0; j < farmer[f].crops.length; j++) {
				if (farmer[f].crops[j].warehouseId == warehouses[i].warehouseId) {
					total += parseInt(farmer[f].crops[j].quantity);
					// console.log(total);
				}
			}
		}
		warehouses[i]['available'] = warehouses[i].storage - total;
		let mnumber = null;
		let warehouseswid = await Warehouse.findOne({ warehouseId: warehouses[i].warehouseId });
		if (warehouseswid.staffDetails) {
			// console.log(warehouseswid.staffDetails);
			for (var s = 0; s < warehouseswid.staffDetails.length; i++) {
				if (warehouseswid.staffDetails[s].role == 'supervisor') {
					mnumber = warehouseswid.staffDetails[s].mobile;
					break;
				}
			}
		}
		warehouses[i]['mobile'] = mnumber;
	}
	// console.log(warehouses);
	if (sortfilter.filter == 'available') {
		warehouses.sort(compare);
		console.log(warehouses);
		if (typ == -1) {
			warehouses = warehouses.reverse();
		}
	}
	let resObj = {
		success: true,
		data: warehouses,
		error: null,
	};
	// res.send(resObj);

	return res.render('./Admin/WarehouseList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			warehouses,
			admin: user,
			sortp: sortfilter,
		},
	});
};

module.exports = getWarehouses;
