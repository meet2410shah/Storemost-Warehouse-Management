// req.params
// req.query
const { _filter } = require('lodash');
const _ = require('lodash');
const { Warehouse } = require('../../database/models/');

const getWarehouses = async function (req, res) {
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

	sortObj[sortfilter.filter] = sortfilter.sort;
	console.log(sortObj);

	const warehouses = await Warehouse.find().sort(sortObj);

	console.log(warehouses);
	if (!warehouses) {
		res.send(errRes);
	}
	let resObj = {
		success: true,
		data: warehouses,
		error: null,
	};
	res.send(resObj);
};

module.exports = getWarehouses;
