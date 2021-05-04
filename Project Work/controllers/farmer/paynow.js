const https = require('https');
const Joi = require('joi');
const { param } = require('../../routes/admin');
const checksum_lib = require('../Paytm/checksum');
const config = require('../Paytm/config');
const jwt = require('jsonwebtoken');
const { Farmer, Warehouse } = require('../../database/models');

const PORT = process.env.PORT || 3000;
const version = process.env.VERSION;

module.exports = async function (req, res, next) {
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
	today = yyyy + '-' + mm + '/' + dd;

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

	const userEmail = user.email;
	if (!userEmail) {
		errRes.error = {
			code: 1100,
			msg: 'login again',
		};
		return res.send(errRes);
	}
	console.log(today);

	let paymentDetails = {
		cropType: req.body.cropType,
		warehouseId: req.body.warehouseId,
		quantity: req.body.quantity, // (in Qunital)
		amount: req.body.amount,
		dueDate: req.body.dueDate,
		depositDate: req.body.depositDate || today,
		customerId: user._id,
		customerEmail: user.email,
		customerPhone: user.mobile,
		description: req.body.description || " ",
	};
	console.log(paymentDetails);

	// let defpay = {
	// 	cropType: "ghav",
	// 	warehouseId: "4",
	// 	quantity: "2",
	// 	amount: "20",
	// 	dueDate: new Date(),
	// 	depositDate: new Date(),
	// 	customerId: "12412",
	// 	customerEmail: "12517fas@gmail.com",
	// 	customerPhone: "641772",
	// }
	// console.log(defpay);
	// paymentDetails = defpay;
	// amount == process.env.PRICE * quantity * (dueDate - depositeDate) (in days)

	let errRes = {
		sucess: false,
		data: null,
		error: {
			code: 1230,
			msg: 'No warehouse found with id',
		},
	};



	let schema = Joi.object({
		email: Joi.string().min(5).max(255).required().email(),
		mobile: Joi.string().min(5).max(50).required().pattern(/^[0-9]+$/),
		farmerId: Joi.string().min(5).max(50).required().token(),
		amount: Joi.number().integer().min(1).required(),
		quantity: Joi.number().integer().min(1).required(),
		depositDate: Joi.date(),
		dueDate: Joi.date().min(Joi.ref('depositDate')),
		warehouseId: Joi.number(),
		cropType: Joi.string().min(2),
		description: Joi.string(),

	});
	let { error } = schema.validate({
		email: paymentDetails.customerEmail,
		mobile: paymentDetails.customerPhone,
		amount: paymentDetails.amount,
		farmerId: paymentDetails.customerId,
		quantity: paymentDetails.quantity,
		depositDate: paymentDetails.depositDate,
		dueDate: paymentDetails.dueDate,
		cropType: paymentDetails.cropType,
		warehouseId: paymentDetails.warehouseId,
		description: paymentDetails.description,
	});

	if (error) {
		errRes.error = {
			code: 1230,
			msg: error.details[0].message,
		};
		return res.send(errRes);
	}

	let farmer;
	try {
		farmer = await Farmer.find({ _id: paymentDetails.farmerId });
	} catch (MonogoError) {
		errRes.error = {
			code: 1230,
			msg: 'No farmer found with given id',
		}
		return res.send(errRes);
	}
	if (!farmer) {
		errRes.error = {
			code: 1230,
			msg: 'No farmer found with given id',
		}
		return res.send(errRes);
	}
	let warehouse;
	try {
		warehouse = await Warehouse.findOne({ warehouseId: paymentDetails.warehouseId });
	} catch (MonogoError) {
		errRes.error = {
			code: 1230,
			msg: 'No warehouse found given id',
		}
		return res.send(errRes);
	}
	if (!warehouse) {
		errRes.error = {
			code: 1230,
			msg: 'No warehouse found given id',
		}
		return res.send(errRes);
	}
	console.log(warehouse);

	const warehouseStorage = parseInt(warehouse.storage);

	try {
		data = await Farmer.find();
	} catch (err) {
		return res.send('error');
	}
	farmer = await Farmer.find({});
	let total = 0;
	for (var f = 0; f < farmer.length; f++) {
		for (var j = 0; j < farmer[f].crops.length; j++) {
			if (farmer[f].crops[j].warehouseId == warehouse.warehouseId) {
				total += parseInt(farmer[f].crops[j].quantity);
				// console.log(total);
			}
		}
	}

	console.log(total + parseInt(paymentDetails.quantity));
	console.log(warehouseStorage);
	if (total + parseInt(paymentDetails.quantity) > warehouseStorage) {
		return res.send({
			success: false,
			data: null,
			err: {
				code: 1008,
				msg: 'Insufficient capacity',
				remaning: warehouseStorage - total,
			},
		});
	}


	const params = {};
	params.MID = config.PaytmConfig.mid;
	params.WEBSITE = config.PaytmConfig.website;
	params.CHANNEL_ID = 'WEB';
	params.INDUSTRY_TYPE_ID = 'Retail';
	params.ORDER_ID = `TEST_${new Date().getTime()}`;
	params.CUST_ID = paymentDetails.customerId;
	params.TXN_AMOUNT = paymentDetails.amount;
	params.CALLBACK_URL = `http://localhost:${process.env.PORT || 5000}${version}/farmer/callback`;
	params.EMAIL = paymentDetails.customerEmail;
	params.MOBILE_NO = paymentDetails.customerPhone;
	// params.quantity = paymentDetails.quantity;

	const paymentdata = jwt.sign(
		paymentDetails,
		process.env.SECRET
	);

	res.cookie('paymentdata', paymentdata);


	checksum_lib.genchecksum(params, config.PaytmConfig.key, (err, checksum) => {
		const txn_url = 'https://securegw-stage.paytm.in/theia/processTransaction'; // for staging
		// var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
		let form_fields = '';
		for (const x in params) {
			form_fields += `<input type='hidden' name='${x}' value='${params[x]}' >`;
		}
		form_fields += `<input type='hidden' name='CHECKSUMHASH' value='${checksum}' >`;
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(
			`<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="${txn_url}" name="f1">${form_fields}</form><script type="text/javascript">document.f1.submit();</script></body></html>`
		);
		res.end();
	});
};
