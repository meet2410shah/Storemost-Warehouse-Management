const { func } = require('joi');
const { Admin } = require('../../database/models/');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

// validate user
const getEdit = async function (req, res, error) {
	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1100,
			msg: 'Email not added in request',
		},
	};

	const user = res.locals.user;


	const userEmail = user.email;
	if (!userEmail) {
		errRes.error = {
			code: 1100,
			msg: 'login again',
		};
		return res.send(errRes);
	}

	return res.render('./Supervisor/EditProfile', {
		data: {
			URL: process.env.PRODUCTION_URL,
			supervisor: user,
			role: "supervisor",
		},
	});

	// res.send(resObj);
};

module.exports = getEdit;
