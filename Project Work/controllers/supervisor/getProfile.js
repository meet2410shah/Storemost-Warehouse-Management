const { Supervisor } = require('../../database/models/');
const jwt = require('jsonwebtoken');


const getProfile = async (req, res) => {

  const token = req.cookies.token;
  // Check the Existance of Token
  if (!token) {
    return res.send({
      success: false,
      data: null,
      error: {
        code: 1001,
        msg: "User Does'nt exists",
      },
    });
  }

  // Check if Token is not corrupted
  try {
    const data = jwt.verify(token, process.env.SECRET);
    const userId = data.userId;
    Supervisor.findOne({ _id: userId }, (err, data) => {
      // Check if there is an error from mongoose or not
      if (err) {
        return res.send({
          success: false,
          data: null,
          error: {
            code: 1003,
            msg: 'Database Error',
          },
        });
      }


	res.send(data);

  });
}catch (err) {
  return res.send({
    success: false,
    data: null,
    error: {
      code: 1002,
      msg: 'Token is Corrupted',
    },
  });
}
};

exports.getProfile = getProfile;
