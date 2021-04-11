const bcrypt = require('bcrypt');
const _ = require('lodash');
const { superUser } = require('../../database/models/super');
const { validate } = require('./validate');
const { errorCustom } = require('../error/error');

// This function checks the user's login credentials in database and respond accordingly.

const authorizeSuper = async (req, res) => {
  // First Validate The HTTP Request
  const { error } = validate(req.body);
  if (error) {
    const errorBlock = errorCustom(error.details[0].path[0], error.details[0].type);
    return res.send({ status: 'Fail', data: null, error: errorBlock });
  }

  //  Now find the user by their email address
  let user = await superUser.findOne({ email: req.body.userEmail });
  if (!user) {
    user = await superUser.findOne({ username: req.body.userEmail });
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


  let data={
    userEmail: req.body.userEmail,
    password: req.body.password
  }

  res.cookie("cookiedata",JSON.stringify(data))

  return res.send({ status: 'Pass', data: _.pick(user, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile', 'warehouseId']), error: null });
};

exports.authorizeSuper = authorizeSuper;
