module.exports = async (req, res) => {
	const { email } = res.locals.user;
	if (!email) {
		return res.redirect('/');
	}
	return res.render('./Admin/EditProfile', {
		data: {
			URL: process.env.PRODUCTION_URL,
			admin: res.locals.user,
		},
	});
};
