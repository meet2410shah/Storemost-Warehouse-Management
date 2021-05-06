const { Admin } = require('../../database/models/');

module.exports = async function (req, res) {
	// Get the Details of User
	const user = res.locals.user;
	const { email } = user;
	if (!email) {
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
	const profile = await Admin.findOne({ email });
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

	// Render the Profile Page
	return res.render('./Admin/ViewProfile', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: profile,
		},
	});
};
