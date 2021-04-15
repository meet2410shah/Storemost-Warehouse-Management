const bcrypt = require('bcrypt');
const { Supervisor } = require('../../database/models/');
const { errorCustom } = require('../error/error');
const { profileValidate } = require('./profileValidate');
const jwt = require('jsonwebtoken');
// const { errorCustom } = require('../error/error');

const editProfile = async (req, res) => {

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
		Supervisor.findOne({ _id: userId }, (err, data) => {
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



	const { error } = profileValidate(req.body);

	if (error) {
		console.log(error);
		const errorBlock = errorCustom(
			error.details[0].path[0],
			error.details[0].type
		);
		return res.send({ status: 'Fail', data: null, error: errorBlock });
	}

	// const userName = await Supervisor.findOne({ username: req.body.username });
	//
	// if (userName != null) {
	// 	return res.send({
	// 		status: 'Fail',
	// 		data: null,
	// 		error: { errCode: 1021, msg: 'This username has already been taken.' },
	// 	});
	// }

	// let user = await Supervisor.findOne({ email: req.body.email });
	// if (user) {
	// 	return res.send({
	// 		status: 'Fail',
	// 		data: null,
	// 		error: { errCode: 1022, msg: 'User already exists' },
	// 	});
	// }

	const salt = bcrypt.genSalt(10);
	req.body.password = bcrypt.hash(req.body.password, salt);

	const update = Supervisor.updateOne(
		{ email: data.email },
		{
			$set: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				mobile: req.body.mobile,
				warehouseId: req.body.warehouseId,
				// email: req.body.email,
				password: user.password,
			},
		}
	);

	res.send(update);

});
}catch (err) {
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

exports.editProfile = editProfile;
