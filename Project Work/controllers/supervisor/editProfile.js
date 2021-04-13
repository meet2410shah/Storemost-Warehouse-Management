// const bcrypt = require('bcrypt');
// const _ = require('lodash');
const { Supervisor } = require('../../database/models/');
const { errorCustom } = require('../error/error');

const { profileValidate } = require('./profileValidate');
// const { errorCustom } = require('../error/error');

const editProfile = async (req, res) => {
	const objt = checkCookie(req.cookies);

	// if(objt!=0){

	const mainObj = JSON.parse(objt.cookiedata).userEmail;

	var n = -1;

	n = mainObj.indexOf('@');

	let mainUser = [];

	if (n != -1) {
		mainUser = await Supervisor.find({ email: mainObj });
	} else {
		mainUser = await Supervisor.find({ username: mainObj });
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

	const userName = await Supervisor.findOne({ username: req.body.username });

	if (userName != null) {
		return res.send({
			status: 'Fail',
			data: null,
			error: { errCode: 1021, msg: 'This username has already been taken.' },
		});
	}

	let user = await Supervisor.findOne({ email: req.body.email });
	if (user) {
		return res.send({
			status: 'Fail',
			data: null,
			error: { errCode: 1022, msg: 'User already exists' },
		});
	}

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	// await user.save();

	// const profile = Supervisor.find({ email: req.body.email});

	const update = Supervisor.updateOne(
		{ email: req.body.email },
		{
			$set: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				mobile: req.body.mobile,
				warehouseId: req.body.warehouseId,
				email: req.body.email,
				password: user.password,
			},
		}
	);

	res.send(update);

	// }
	// else{
	// res.redirect("/login");
	// }
};

exports.editProfile = editProfile;
