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
				msg: 'user not logged in',
			},
		});
	}
	const { user } = jwt.verify(token, process.env.SECRET);

	if (!user) return res.send('ERROR');

	// console.log(user);


  //Find the warehouse using warehouseID
	Warehouse.find({ warehouseId: user.warehouseId }, (err,cursor) => {

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
	staffOne.firstName = user.firstName;
	staffOne.lastName = user.lastName;
	staffOne.mobile = user.mobile;
	staffOne.role = "Supervisor";
	list.push(staffOne);

	// console.log(cursor);
	// console.log(cursor[0].warehouseId);
	// console.log(cursor[0].staffDetails);


  //Iterate and save up datails of the staff
	cursor[0].staffDetails.forEach(function (item) {
		let staffOne = new Object();

		staffOne.firstName = item.firstName;
		staffOne.lastName = item.lastName;
		staffOne.mobile = item.mobile;
		staffOne.role = item.role;
		list.push(staffOne);
	});


	return res.render('./Supervisor/StaffList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			list,
			supervisor: user,
		},
	});

	res.send(list);

});

};


module.exports = staffList;
