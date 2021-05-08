const { Warehouse, Farmer } = require('../../database/models/');

const homeWarehouse = async function (req, res) {

	// const warehouse = await Warehouse.find();

	let warehouses;
	warehouses = await Warehouse.aggregate([
		{
			$project: {
				_id: 0,
				lname: { $toLower: '$warehouseId' },
				"location.address": 1,
				storage: 1,
				// name: 1,
				warehouseId: 1,
			},
		},
		{ $sort: { lname: 1 } },
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

	// console.log(warehouses);

	if (!warehouses) {
		return res.send(errRes);
	}
	const farmer = await Farmer.find();
	// // console.log(farmer);
	//
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
		// console.log(mnumber);
		warehouses[i]['mobile'] = mnumber;
	}
	// console.log(warehouses);

	return res.render('./WarehouseList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			warehouses,
		},
	});

	res.send(warehouses);
};

module.exports = homeWarehouse;
