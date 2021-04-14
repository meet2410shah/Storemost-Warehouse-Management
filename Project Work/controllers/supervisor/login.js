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
    return res.send({ status: 'Fail', data: null, error: errorBlock });
  }

  //  Now find the user by their email address
  let user = await Supervisor.findOne({ email: req.body.userEmail });
  if (!user) {
    user = await Supervisor.findOne({ username: req.body.userEmail });
    if (!user) {
      return res.send({ status: 'Fail', data: null, error: { errCode: 1052, msg: 'Incorrect email/username or password.' } });
    }
  }

  // Then validate the Credentials in MongoDB match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.send({ status: 'Fail', data: null, error: { errCode: 1052, msg: 'Incorrect email/username or password.' } });
  }

  const token = jwt.sign(
		{
			userId: user._id,
		},
		process.env.SECRET
	);

	res.cookie('token', token);

  return res.send({ status: 'Pass', data: _.pick(user, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile', 'warehouseId']), error: null });
};

exports.login = login;
