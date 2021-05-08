// This file registers the data of admin

const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Supervisor, Warehouse } = require('../../database/models/');
const { validate } = require('./validateRegister');
const { errorCustom } = require('../error/error');
const jwt = require('jsonwebtoken');

const registerSuper = async (req, res) => {


  let data = req.body;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '/' + mm + '/' + yyyy;
  data['registerDate'] = today;
  data['address'] = data['address'] || " ";

  const { error } = validate(data);
  if (error) {
    const errorBlock = errorCustom(
      error.details[0].path[0],
      error.details[0].type
    );
    return res.send({ success: false, data: null, error: errorBlock });
  }
  // Check if this user already exisits

  const userName = await Supervisor.findOne({ username: data.username });

  if (userName != null) {
    return res.send({
      success: false,
      data: null,
      error: { code: 1021, msg: "This username has already been taken." },
    });
  }

  let user = await Supervisor.findOne({ email: data.email });

  if (user) {
    return res.send({
      success: false,
      data: null,
      error: { code: 1022, msg: "User already exists" },
    });
  }


  let ware = await Supervisor.findOne({ warehouseId: data.warehouseId });

  // console.log(ware);

  if (ware) {
    return res.send({
      success: false,
      data: null,
      error: { code: 1023, msg: "Supervisor for that warehouse already exists" },
    });
  }

  // Insert the new user if they do not exist yet
  // let data = req.body;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '/' + mm + '/' + yyyy;
  req.body['registerDate'] = today;


  // console.log(req.body);




  user = new Supervisor(
    _.pick(data, [
      "firstName",
      "lastName",
      "username",
      "password",
      "email",
      "mobile",
      "address",
      "warehouseId",
      "registerDate"
    ])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  console.log(user);
  await user.save();



  Warehouse.update(
    { "warehouseId": "user.warehouseId" },
    {
      $push: {
        staffDetails: {
          $each: [{
            staffId: "",
            firstName: user.firstName,
            lastName: user.lastName,
            salary: 0,
            role: "supervisor",
            mobile: user.mobile,
          }],
          $position: 0
        }
      }
    }
  );


  const token = jwt.sign(
    {
      user: user,
      role: "supervisor",
    },
    process.env.SECRET
  );

  res.clearCookie('token');
  res.cookie('token', token);



  res.send({
    success: true,
    data: _.pick(user, [
      "_id",
      "firstName",
      "lastName",
      "username",
      "password",
      "email",
      "mobile",
      "warehouseId",
      "registerDate",
      "address",
    ]),
    error: null,
  });
};

module.exports = registerSuper;
