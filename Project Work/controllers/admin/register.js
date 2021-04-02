// This file registers the data of admin

const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/admin');
const { validate } = require('./validate');
const { errorCustom } = require('../error/error');

const registerAdmin = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    // console.log('Wrong');
    // console.log(error);
    // console.log(error.details[0].message);
    // console.log(error.details[0].path);
    // console.log(error.details[0].context);
    // console.log(error.details[0].type);
    // console.log(error.details[0].type.slice(0,5));
    // error(error.details[0].path[0].error.details[0].type);
    // console.log(errorCustom(error.details[0].path[0],error.details[0].type));
    const errorBlock = errorCustom(error.details[0].path[0], error.details[0].type);
    return res.send({ status: 'Fail', data: null, error: errorBlock });
    // return res.status(400).send(error.details[0].message);
    // return res.send("Error");
  }

  // Check if this user already exisits

  const userName = await User.findOne({ username: req.body.username });

  if (userName != null) {
    // return res.status(400).send('That username has already been taken!');
    return res.send({ status: 'Fail', data: null, error: { errCode: 1021, msg: 'This username has already been taken.' } });
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    // return res.status(400).send('That user already exisits!');
    return res.send({ status: 'Fail', data: null, error: { errCode: 1022, msg: 'User already exists' } });
  }
  // Insert the new user if they do not exist yet
  user = new User(_.pick(req.body, ['firstName', 'lastName', 'username', 'password', 'email', 'mobile']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  // console.log('Registered');
  return res.send({ status: 'Pass', data: _.pick(user, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile']), error: null });
};

exports.registerAdmin = registerAdmin;
