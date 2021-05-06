const { Supervisor } = require('../../database/models/');
const jwt = require('jsonwebtoken');


const getProfile = async (req, res) => {


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

      return res.render('./Supervisor/ViewProfile', {
    		data: {
    			URL: process.env.PRODUCTION_URL,
    			supervisor: user,
          role: "supervisor",
    		},
    	});


	     res.send(data);

};

module.exports = getProfile;
