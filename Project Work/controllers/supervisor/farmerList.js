const { Supervisor } = require('../../database/models/');
const { Farmer } = require('../../database/models/');
const { checkCookie } = require('../cookies/checkCookie');

const farmerList = async (req, res) => {
	const objt = checkCookie(req.cookies);

	const mainObj = JSON.parse(objt.cookiedata).userEmail;

	var n = -1;

	n = mainObj.indexOf('@');

	let mainUser = [];

	if (n != -1) {
		mainUser = await Supervisor.find({ email: mainObj });
	} else {
		mainUser = await Supervisor.find({ username: mainObj });
	}

	const cursor = await Farmer.find({
		'crop.warehouseId': mainUser[0].warehouseId,
	});

	let list = [];

	cursor.forEach(function (item) {
		tCrop = 0;
		let inform = new Object();

		item.crop.forEach(function (cropItem) {
			if (cropItem.warehouseId === 101) {
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

	// }
	// else{
	// res.redirect("/login");
	// }
};

exports.farmerList = farmerList;
