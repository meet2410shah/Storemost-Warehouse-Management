// Required Modules
const bcrypt = require('bcrypt');
const _ = require('lodash');

// Database Model
const { Farmer } = require('../../database/models/');

// Utilities
const { validate } = require('./validate_register');
const { errorCustom } = require('../error/error');

// Router Definition
module.exports = async (req, res) => {
	const { error } = validate(req.body);
	if (error) {
		const errorBlock = errorCustom(
			error.details[0].path[0],
			error.details[0].type
		);
		return res.send({ success: false, data: null, error: errorBlock });
	}

	// Check if the Farmer Already Exists (Same Username)
	const username = await Farmer.findOne({ username: req.body.username });
	if (username != null) {
		return res.send({
			success: false,
			data: null,
			error: { code: 1021, msg: 'This username has already been taken.' },
		});
	}

	// Check if the Farmer Already Exists (Same Email Address)
	const email = await Farmer.findOne({ email: req.body.email });
	if (email) {
		return res.send({
			success: false,
			data: null,
			error: { code: 1022, msg: 'User already exists' },
		});
	}


	// Insert the new user if they do not exist yet
	let data = req.body;

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	today = dd + '/' + mm + '/' + yyyy;
	data['registerDate'] = today;

	console.log(data);
	let user = new Farmer(
		_.pick(data, [
			"firstName",
			"lastName",
			"username",
			"password",
			"email",
			"mobile",
			"registerDate"
		])
	);
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();

	const token = jwt.sign(
		{
			user: user,
			role: "farmer",
		},
		process.env.SECRET
	);
	res.clearCookie('token');
	res.cookie('token', token);

	res.send({
		success: true,
		data: _.pick(user, [
			"_id",
			"firstName",
			"lastName",
			"username",
			"password",
			"email",
			"mobile",
			"registerDate"
		]),
		error: null,
	});
};
