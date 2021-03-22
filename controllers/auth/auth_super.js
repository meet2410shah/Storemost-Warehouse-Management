const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/super');
const { validate } = require('./auth_validate');

// This function checks the user's login credentials in database and respond accordingly.

const authorize_super = async (req, res) => {
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

  // Then validate the Credentials in MongoDB match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('Incorrect email or password.');
  }

  res.send(true);
};

exports.authorize_super = authorize_super;
