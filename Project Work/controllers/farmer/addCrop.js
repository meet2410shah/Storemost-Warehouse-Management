const jwt = require('jsonwebtoken');
const { farmerUser } = require('../../database/models/farmer');

module.exports = async (req, res) => {
	const token = req.cookies.token;
	// Check the Existance of Token
	if (!token) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1001,
				msg: "User Does'nt exists",
			},
		});
	}

	// Check if Token is not corrupted
	try {
		const data = jwt.verify(token, process.env.SECRET);
		const userId = data.userId;

		const crop = {
			storageTime: Date.now(),
			quantity: 10,
			warehouseId: 10,
			paymentId: '12312',
			cropType: 'Wheat',
		};

		await farmerUser.findOneAndUpdate(
			{ _id: userId },
			{
				$push: {
					crops: crop,
				},
			},
			(err, data) => {
				if (err) {
					return res.send({
						success: false,
						data: null,
						err: {
							code: 1007,
							msg: 'Not able to add the crop! Sorry of Inconvinence',
						},
					});
				}
				return res.send({
					success: true,
					data: {
						msg: 'Crop Added Successfully',
					},
					err: null,
				});
			}
		);
	} catch (err) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1002,
				msg: 'Token is Corrupted',
			},
		});
	}
};
