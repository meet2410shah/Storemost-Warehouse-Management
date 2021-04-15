const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/admin');
const { validate } = require('./auth_validate');

// This function checks the user's login credentials in database and respond accordingly.

const authorize_admin = async (req, res) => {
  // First Validate The HTTP Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //  Now find the user by their email address
  let user = await User.findOne({ email: req.body.user_email });
  if (!user) {
    user = await User.findOne({ username: req.body.user_email });
    if (!user) {
      return res.status(400).send('Incorrect email/username or password.');
    }
  }

  // //  Now find the user by their username
  // let user = await User.findOne({ email: req.body.email });
  // if (!user) {
  //     return res.status(400).send('Incorrect email or password.');
  // }

  // Then validate the Credentials in MongoDB match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('Incorrect email/username or password.');
  }

  res.send(true);
};

exports.authorize_admin = authorize_admin;
