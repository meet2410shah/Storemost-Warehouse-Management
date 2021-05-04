module.exports = (req, res) => {
	res.clearCookie('token');
	return res.redirect('/');
};
