const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Supervisor } = require('../../database/models/');
const { validate } = require('./validateLogin');
const { errorCustom } = require('../error/error');
const jwt = require('jsonwebtoken');

const LoginSuper = async (req, res) => {
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

	let user = await Supervisor.findOne({ email: req.body.email });
	if (!user) {
		user = await Supervisor.findOne({ username: req.body.email });
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


  console.log(user);

	const token = jwt.sign(
		{
			user,
		},
		process.env.SECRET
	);

	res.cookie('token', token);

	return res.redirect('/api/v1/supervisor/getFarmers');

	return res.send({
		status: 'Pass',
		data: user,
		error: null,
	});
};

module.exports = LoginSuper;
