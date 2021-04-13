const { warehouseUser } = require('../../database/models/warehouse');

module.exports = async (req, res) => {
	try {
		const warehouses = await warehouseUser.find({});
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
