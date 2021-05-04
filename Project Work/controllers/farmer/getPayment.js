const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = (req, res) => {

    const token = req.cookies.token;
	// Check the Existance of Token
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
    const { user } = jwt.verify(token, process.env.SECRET);
    if (!user) return res.send('ERROR');

    const userEmail = user.email;
    if (!userEmail) {
        errRes.error = {
            code: 1100,
            msg: 'login again',
        };
        return res.send(errRes);
    }
    return res.render('./Farmer/Payment', {
        data: {
            URL: process.env.PRODUCTION_URL,
            farmer: user,
        },
    });
};
