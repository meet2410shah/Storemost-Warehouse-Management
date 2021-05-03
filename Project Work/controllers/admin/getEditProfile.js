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
				msg: 'user not logged in',
			},
		});
	}
	const { user } = jwt.verify(token, process.env.SECRET);
	if (!user) return res.send('ERROR');

	const userEmail = user.email;
	if (!userEmail) {
		errRes.error = {
			code: 1100,
			msg: 'login again',
		};
		return res.send(errRes);
	}

	return res.render('./Admin/EditProfile', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: user,
		},
	});

	// res.send(resObj);
};

module.exports = admin;
