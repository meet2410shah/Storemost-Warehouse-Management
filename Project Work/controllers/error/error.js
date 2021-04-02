const errorCode = [
  [1001, 'firstName', 'string.empty'],
  [1002, 'lastName', 'string.empty'],
  [1003, 'username', 'string.empty'],
  [1004, 'password', 'string.empty'],
  [1005, 'email', 'string.empty'],
  [1006, 'mobile', 'string.empty'],
  [1007, 'warehouseId', 'string.empty'],
  [1008, 'confirmPassword', 'string.empty'],

  [1009, 'firstName', 'string.min'],
  [1010, 'lastName', 'string.min'],
  [1011, 'username', 'string.min'],
  [1012, 'password', 'string.min'],
  [1013, 'email', 'string.min'],
  [1014, 'mobile', 'string.min'],
  [1015, 'warehouseId', 'string.min'],
  [1016, 'confirmPassword', 'string.min'],

  [1017, 'username', 'string.token'],
  [1018, 'email', 'string.email'],
  [1019, 'mobile', 'string.pattern.base'],
  [1020, 'warehouseId', 'string.pattern.base'],

  [1051, 'userEmail', 'string.empty'],
];

function errorCustom(errPath, errType) {
  // console.log(errPath);
  // console.log(errType);
  let code = 0;

  if (errType === 'string.max') {
    errType = 'string.min';
  }

  let point = 0;

  for (let i = 0; i < 20; i++) {
    if (errPath === errorCode[i][1]) {
      if (errType === errorCode[i][2]) {
        point = i;
        break;
      }
    }
  }

  code = errorCode[point][0];

  let msg = '';

  // console.log(errorCode[point][1]);

  if (errType === 'string.empty') {
    msg = `${errorCode[point][1]} is empty`;
  } else if (errType === 'string.min') {
    msg = `${errorCode[point][1]} should be 5 to 50 characters long`;
  } else if (errType === 'string.token') {
    msg = `${errorCode[point][1]} should consist of alpha-numeric or _ characters`;
  } else if (errType === 'string.email') {
    msg = `${errorCode[point][1]} should be a valid email`;
  } else if (errType === 'string.pattern.base') {
    msg = `${errorCode[point][1]} should have numeric values`;
  }

  const err = {
    errCode: code,
    msg,
  };

  return err;
}

exports.errorCustom = errorCustom;
