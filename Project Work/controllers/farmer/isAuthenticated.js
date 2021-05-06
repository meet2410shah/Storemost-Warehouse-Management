const jwt = require('jsonwebtoken');
const { Warehouse, Farmer } = require('../../database/models');
// Middleware
module.exports = async (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.redirect('/');
	}

	// Generate the User
	try {
		const { user, role } = jwt.verify(token, process.env.SECRET);
		// Check the role of the admin
		if (role != 'farmer') {
			return res.redirect('/');
		}
		// let farmer;
		// try {
		// 	farmer = await Farmer.findOne({ _id: user._id });
		// } catch {
		// 	return res.redirect('/');
		// }
		// if (!farmer) {
		// 	return res.redirect('/');
		// }
		res.locals.user = user;
		res.locals.role = role;
	} catch {
		if (!user) {
			res.clearCookie('token');
			return res.redirect('/');
		}
	}

	next();
};
