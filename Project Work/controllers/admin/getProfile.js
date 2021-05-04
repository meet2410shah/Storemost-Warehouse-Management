const { func } = require('joi');
const { Admin } = require('../../database/models/');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = async function (req, res, error) {
	// Check the Existance of Token
	const token = req.cookies.token;
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

	// Generate the User
	const { user } = jwt.verify(token, process.env.SECRET);
	if (!user) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1002,
				msg: 'User not Verified',
			},
		});
	}

	// Check User Email or Username
	const userEmail = user.email;
	if (!userEmail) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1100,
				msg: 'Email/Username not Available',
			},
		});
	}

	// Get Profile
	const profile = await Admin.findOne({ email: userEmail });
	if (!profile) {
		return res.send({
			success: false,
			data: null,
			error: {
				code: 1101,
				msg: 'User not found in database',
			},
		});
	}

	return res.render('./Admin/ViewProfile', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: profile,
		},
	});
};
