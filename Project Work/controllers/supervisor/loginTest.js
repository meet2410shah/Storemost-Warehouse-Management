const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Supervisor } = require('../../database/models/');
const { validate } = require('./validateLogin');
const { errorCustom } = require('../error/error');
const jwt = require('jsonwebtoken');


// This function checks the user's login credentials in database and respond accordingly.

const login = async (req, res) => {
  // First Validate The HTTP Request
  const { error } = validate(req.body);
  if (error) {
    const errorBlock = errorCustom(error.details[0].path[0], error.details[0].type);
    return res.send({ success: false, data: null, error: errorBlock });
  }

  //  Now find the user by their email address
  let user = await Supervisor.findOne({ email: req.body.email });
  if (!user) {
    user = await Supervisor.findOne({ username: req.body.email });
    if (!user) {
      return res.send({ success: false, data: null, error: { code: 1052, msg: 'Incorrect email/username or password.' } });
    }
  }

  // Then validate the Credentials in MongoDB match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.send({ success: false, data: null, error: { code: 1052, msg: 'Incorrect email/username or password.' } });
  }

  const token = jwt.sign(
		{
			user,
		},
		process.env.SECRET
	);

	res.cookie('token', token);

  return res.send({ success: true, data: _.pick(user, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile', 'warehouseId']), error: null });
};

module.exports = login;
