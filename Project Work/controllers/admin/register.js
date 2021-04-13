// This file registers the data of admin

const bcrypt = require("bcrypt");
const _ = require("lodash");
const { adminUser } = require("../../database/models/admin");
const { validate } = require("./validate");
const { errorCustom } = require("../error/error");

const registerAdmin = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    const errorBlock = errorCustom(
      error.details[0].path[0],
      error.details[0].type
    );
    return res.send({ status: "Fail", data: null, error: errorBlock });
  }

  // Check if this user already exisits

  const userName = await adminUser.findOne({ username: req.body.username });

  if (userName != null) {
    return res.send({
      status: "Fail",
      data: null,
      error: { errCode: 1021, msg: "This username has already been taken." },
    });
  }

  let user = await adminUser.findOne({ email: req.body.email });

  if (user) {
    return res.send({
      status: "Fail",
      data: null,
      error: { errCode: 1022, msg: "User already exists" },
    });
  }
  // Insert the new user if they do not exist yet
  user = new adminUser(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "username",
      "password",
      "email",
      "mobile",
    ])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send({
    status: "Pass",
    data: _.pick(user, [
      "_id",
      "firstName",
      "lastName",
      "username",
      "password",
      "email",
      "mobile",
    ]),
    error: null,
  });
};

exports.registerAdmin = registerAdmin;
