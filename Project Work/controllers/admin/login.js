const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Admin } = require('../../database/models/');
const { validate } = require('./validate_login');
const { errorCustom } = require('../error/error');
const jwt = require('jsonwebtoken');

const LoginAdmin = async (req, res) => {
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1100,
			msg: 'Email not added in request',
		},
	};
	const { error } = validate(req.body);
	if (error) {
		const errorBlock = errorCustom(
			error.details[0].path[0],
			error.details[0].type
		);
		errRes.error = {
			code: 1003,
			msg: error.details[0].path[0],
		};
		return res.send(errRes);
	}

	let user = await Admin.findOne({ email: req.body.email });
	if (!user) {
		user = await Admin.findOne({ username: req.body.email });
	}
	if (!user) {
		errRes.error = {
			code: 1052,
			msg: 'incorrect email/username or password',
		};
		return res.send(errRes);
	}

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.send({
			status: 'Fail',
			data: null,
			error: { errCode: 1052, msg: 'Incorrect email/username or password.' },
		});
	}

	const token = jwt.sign(
		{
			user,
			role: 'admin'
		},
		process.env.SECRET
	);

	res.cookie('token', token);

	return res.redirect('/api/v1/admin/getWarehouses');

	return res.send({
		status: 'Pass',
		data: user,
		error: null,
	});
};

module.exports = LoginAdmin;
