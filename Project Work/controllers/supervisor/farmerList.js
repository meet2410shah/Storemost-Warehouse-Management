const { Supervisor } = require('../../database/models/');
const { Farmer } = require('../../database/models/');
const jwt = require('jsonwebtoken');


const farmerList = async (req, res) => {

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


  //Find the farmer with the specific warehouseId
	Farmer.find({
		'crop.warehouseId': data.warehouseId,
	}, (err,cursor) => {

	let list = [];

	cursor.forEach(function (item) {
		tCrop = 0;
		let inform = new Object();

		item.crop.forEach(function (cropItem) {
			if (cropItem.warehouseId === data.warehouseId) {
				tCrop = tCrop + cropItem.quantity;
			}
		});

		inform.firstName = item.firstName;
		inform.lastName = item.lastName;
		inform.mobile = item.mobile;
		inform.totalCrop = tCrop;

		list.push(inform);
	});

	res.send(list);


	});


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

exports.farmerList = farmerList;
