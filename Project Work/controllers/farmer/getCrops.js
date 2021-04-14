const jwt = require('jsonwebtoken');
const { Farmer } = require('../../database/models/');

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
		Farmer.findOne({ _id: userId }, (err, data) => {
			// Check if there is an error from mongoose or not
			if (err) {
				return res.send({
					success: false,
					data: null,
					error: {
						code: 1003,
						msg: 'Database Error',
					},
				});
			}

			// Generation of Response
			const { crops } = data;

			const response = {
				success: true,
				data: {
					crops,
				},
				error: null,
			};

			return res.send(response);
		});
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
