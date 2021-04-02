// This file registers the data of supervisor

const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/super.js');
const { validate } = require('./validate_super');

const register_sup = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits

  const userName = await User.findOne({ username: req.body.username });

  if (userName != null) {
    return res.status(400).send('That username has already been taken!');
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('That user already exisits!');
  }
  // Insert the new user if they do not exist yet
  user = new User(_.pick(req.body, ['first_name', 'last_name', 'username', 'password', 'email', 'mobile', 'warehouse_id']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ['_id', 'username', 'email']));
};

exports.register_super = register_sup;
