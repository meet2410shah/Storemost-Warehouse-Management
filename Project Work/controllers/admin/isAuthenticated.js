const jwt = require('jsonwebtoken');

// Middleware
module.exports = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.redirect('/');
	}

	// Generate the User
	try {
		const { user, role } = jwt.verify(token, process.env.SECRET);
		// Check the role of the admin
		if (role != 'admin') {
			return res.redirect('/');
		}
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
