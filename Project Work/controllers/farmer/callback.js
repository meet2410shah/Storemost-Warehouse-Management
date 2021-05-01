const https = require('https');
const checksum_lib = require('../Paytm/checksum');
const config = require('../Paytm/config');
const jwt = require('jsonwebtoken');
const { Farmer } = require('../../database/models/');

// const parseUrl = express.urlencoded({ extended: false });
// const parseJson = express.json({ extended: false });

module.exports = async (req, res, next) => {
	// Route for verifiying payment
	console.log('callback url called');
	let body = '';
	req.on('data', (data) => {
		consol.log(JSON.parse(data));
		body += data;
	});
	let post_data = req.body;

	// received params in callback
	console.log('Callback Response: ', post_data, '\n');
	// verify the checksum
	const checksumhash = post_data.CHECKSUMHASH;
	// delete post_data.CHECKSUMHASH;
	const result = checksum_lib.verifychecksum(
		post_data,
		config.PaytmConfig.key,
		checksumhash
	);
	console.log('Checksum Result => ', result, '\n');
	// Send Server-to-Server request to verify Order Status
	const params = { MID: config.PaytmConfig.mid, ORDERID: post_data.ORDERID };
	checksum_lib.genchecksum(params, config.PaytmConfig.key, (err, checksum) => {
		params.CHECKSUMHASH = checksum;
		post_data = `JsonData=${JSON.stringify(params)}`;

		const options = {
			hostname: 'securegw-stage.paytm.in', // for staging
			// hostname: 'securegw.paytm.in', // for production
			port: 443,
			path: '/merchant-status/getTxnStatus',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': post_data.length,
			},
		};
		// Set up the request
		let response = '';
		const post_req = https.request(options, async (post_res) => {
			post_res.on('data', (chunk) => {
				response += chunk;
			});
			post_res.on('end', async () => {
				console.log('S2S Response: ', response, '\n');
				const _result = JSON.parse(response);
				if (_result.STATUS == 'TXN_SUCCESS') {
					const paymentdata = req.cookies.paymentdata;
					const paymentDetails = jwt.verify(paymentdata, process.env.SECRET);
					console.log(paymentDetails);
					const filter = { email: paymentDetails.customerEmail };
					const obj = {
						cropType: paymentDetails.cropType,
						warehouseId: paymentDetails.warehouseId,
						quantity: paymentDetails.quantity,
						depositDate: paymentDetails.depositDate,
						dueDate: paymentDetails.dueDate,
						description: "",
						amount: paymentDetails.amount,
						orderId: paymentDetails.orderId,
						paymentId: _result.TXNID,
					}
					let profile = await Farmer.updateOne(filter, { $push: { crops: obj } });

					res.send('payment sucess ');
				} else {
					res.send('payment failed');
				}
			});
		});
		// post the data
		post_req.write(post_data);
		post_req.end();
	});
};
