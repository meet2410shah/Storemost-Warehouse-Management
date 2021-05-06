const { Supervisor } = require('../../database/models/');
const { Farmer } = require('../../database/models/');
const jwt = require('jsonwebtoken');


const farmerList = async (req, res) => {


	const user = res.locals.user;


		// console.log(data);
		// console.log(data.user._id);
    const userId = user._id;
    Supervisor.findOne({ _id: userId }, (err, dataSuper) => {
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


// console.log(data);

  //Find the Farmer with the specific warehouseId
	Farmer.find({
		'crops.warehouseId': dataSuper.warehouseId,
	}, (err,cursor) => {

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

	// console.log(cursor);

	let list = [];

	cursor.forEach(function (item) {

		// console.log(item);

		let totalQuantity = 0;
		let totalCrop = 0;
		let deposit = 0;

		let inform = new Object();

		item.crops.forEach(function (cropItem) {
			if (cropItem.warehouseId === dataSuper.warehouseId) {
				// totalCrop = totalCrop + cropItem.quantity;
				totalCrop++;
				deposit = deposit + cropItem.amount;
			}
		});

		inform.firstName = item.firstName;
		inform.lastName = item.lastName;
		inform.mobile = item.mobile;
		inform.totalCrop = totalCrop;
		inform.deposit = deposit;
		// inform.address = item.address;

		list.push(inform);
	});



	return res.render('./Supervisor/FarmerList', {
		data: {
			URL: process.env.PRODUCTION_URL,
			list,
			supervisor: user,
			role: "supervisor",
		},
	});


	res.send(list);


	});


});
};

module.exports = farmerList;
