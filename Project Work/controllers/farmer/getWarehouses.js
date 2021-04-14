const { Warehouse } = require('../../database/models/');

module.exports = async (req, res) => {
	try {
		const warehouses = await Warehouse.find({});
		const response = {
			success: true,
			data: {
				warehouses,
			},
			error: null,
		};
		return res.send(response);
	} catch (err) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1004,
				msg: 'Database Error',
			},
		});
	}
};
