const { func } = require('joi');
const { Admin } = require('../../database/models/');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

// validate user
const admin = async function (req, res, error) {
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1100,
			msg: 'Email not added in request',
		},
	};

	const token = req.cookies.token;
	// Check the Existance of Token
	if (!token) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1001,
				msg: "user not logged in",
			},
		});
	}
	const data = jwt.verify(token, process.env.SECRET);
	const userEmail = data.userEmail;
	if (!userEmail) {
		errRes.error = {
			code: 1100,
			msg: 'login again',
		};
		return res.send(errRes);
	}

	const profile = await Admin.findOne({
		email: userEmail,
	});

	if (!profile) {
		errRes.error = {
			code: 1101,
			msg: 'User not found  in database',
		};
		return res.send(errRes);
	}
	const resObj = {
		success: true,
		data: _.pick(profile, [
			'_id',
			'firstName',
			'lastName',
			'username',
			'password',
			'email',
			'mobile',
		]),
		error: null,
	};

	res.send(resObj);
};

module.exports = admin;
