// const bcrypt = require('bcrypt');
// const _ = require('lodash');
const { superUser } = require("../../database/models/super.js");
// const { validate } = require('./validate');
// const { errorCustom } = require('../error/error');

const getProfile = async (req, res) => {
  
  const objt = checkCookie(req.cookies);

  // if(objt!=0){

  const mainObj = JSON.parse(objt.cookiedata).userEmail;

  var n = -1;

  n = mainObj.indexOf("@");

  let mainUser = [];

  if (n != -1) {
    mainUser = await superUser.find({ email: mainObj });
  } else {
    mainUser = await superUser.find({ username: mainObj });
  }

  //   const profile = await superUser.find({ email: "super1@gmail.com"},function(err, doc){
  //   if(doc.length === 0 || err){
  //     res.send('Error');
  //   }
  // }
  // )

  res.send(mainUser);

  // }
  // else{
  // res.redirect("/login");
  // }
};

exports.getProfile = getProfile;
