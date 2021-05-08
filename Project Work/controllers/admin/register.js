// This file registers the data of admin

const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Admin } = require('../../database/models/');
const { validate } = require('./validate_register');
const { errorCustom } = require('../error/error');
const jwt = require('jsonwebtoken');

const registerAdmin = async (req, res) => {
	// Check if this user already exisits

	const userName = await Admin.findOne({ username: req.body.username });

	if (userName != null) {
		return res.send({
			success: false,
			data: null,
			error: { code: 1021, msg: 'This username has already been taken.' },
		});
	}

	let user = await Admin.findOne({ email: req.body.email });

	if (user) {
		return res.send({
			success: false,
			data: null,
			error: { code: 1022, msg: 'User already exists' },
		});
	}
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
	data['address'] = data['address'] || ' ';
	
	var usern = data.firstName + data.lastName;
	data['username'] = usern.toLowerCase();

	const { error } = validate(data);
	if (error) {
		const errorBlock = errorCustom(
			error.details[0].path[0],
			error.details[0].type
		);
		return res.send({ success: false, data: null, error: errorBlock });
	}

	// Insert the new user if they do not exist yet
	user = new Admin(
		_.pick(data, [
			'firstName',
			'lastName',
			'username',
			'password',
			'email',
			'mobile',
			'address',
			'registerDate',
		])
	);
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();

	const token = jwt.sign(
		{
			user,
			role: 'admin',
		},
		process.env.SECRET
	);

	res.cookie('token', token);

	return res.redirect('/api/v1/admin/getWarehouses');
};

module.exports = registerAdmin;
