const { Supervisor, Warehouse } = require('../../database/models/');
const jwt = require('jsonwebtoken');

const staffList = async (req, res) => {


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


  //Find the warehouse using warehouseID
	Warehouse.find({ warehouseId: data.warehouseId }, (err,cursor) => {

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

	let list = [];

	//Adding supervisor as a staff first
	let staffOne = new Object();
	staffOne.firstName = data.firstName;
	staffOne.lastName = data.lastName;
	staffOne.mobile = data.mobile;
	staffOne.role = "Supervisor";
	list.push(staffOne);


  //Iterate and save up datails of the staff
	cursor.staffDetails.forEach(function (item) {
		let staffOne = new Object();

		staffOne.firstName = item.firstName;
		staffOne.lastName = item.lastName;
		staffOne.mobile = item.mobile;
		staffOne.role = item.role;
		list.push(staffOne);
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


exports.staffList = staffList;
