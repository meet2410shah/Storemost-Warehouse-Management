const { Supervisor } = require('../../database/models/');
const jwt = require('jsonwebtoken');


const getProfile = async (req, res) => {


  const user = res.locals.user;

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
