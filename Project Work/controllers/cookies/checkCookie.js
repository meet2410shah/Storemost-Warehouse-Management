// const Joi = require('joi');

// This function checks the validity of the inputs provided by user.

function checkCookie(obj) {
  const objt = Object.assign({},obj)

  // console.log(obj);

  // console.log(Object.keys(obj).length);

  if(Object.keys(objt).length===0){
    return 0;
  }
  else {
    // console.log(JSON.parse(objt.cookiedata).userEmail);
    return objt;
  }
}

exports.checkCookie = checkCookie;
