const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Farmer } = require('../../database/models/');
const { validate } = require('./validate_login');
const { errorCustom } = require('../error/error');

const jwt = require('jsonwebtoken');

// This function checks the user's login credentials in database and respond accordingly.

module.exports = async (req, res) => {
	// First Validate The HTTP Request
	const { error } = validate(req.body);
	if (error) {
		const errorBlock = errorCustom(
			error.details[0].path[0],
			error.details[0].type
		);
		return res.send({ success: false, data: null, error: errorBlock });
	}

	//  Now find the user by their email address
	const { email, password } = req.body;
	let user = await Farmer.findOne({ email: email });
	if (!user) {
		user = await Farmer.findOne({ username: email });
		if (!user) {
			return res.send({
				success: false,
				data: null,
				error: { code: 1052, msg: 'Incorrect email/username or password.' },
			});
		}
	}
	// console.log(req.body);
	// Then validate the Credentials in MongoDB match
	// those provided in the request
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		return res.send({
			success: false,
			data: null,
			error: { code: 1052, msg: 'Incorrect email/username or password.' },
		});
	}

	const token = jwt.sign(
		{
			user: user,
			role: "farmer",
		},
		process.env.SECRET
	);
	res.clearCookie('token');

	// console.log(token);
	res.cookie('token', token);

	return res.redirect('/api/v1/farmer/getCrops');

	return res.send({
		success: true,
		data: _.pick(user, [
			'_id',
			'firstName',
			'lastName',
			'username',
			'password',
			'email',
			'mobile',
			"registerDate"
		]),
		error: null,
	});
};
