const https = require('https');
const Joi = require('joi');
const checksum_lib = require('../Paytm/checksum');
const config = require('../Paytm/config');

const PORT = process.env.PORT || 3000;
const version = process.env.VERSION;

const pay_now = async function (req, res, next) {
  const paymentDetails = {
    amount: req.body.amount,
    customerId: req.body.farmerId,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
  };
  let errRes = {
    sucess: false,
    data: null,
    error: {
      code: 1230,
      msg: "No warehouse found with id"
    }
  }


  if (!paymentDetails.customerEmail) {
    errRes.error = {
      code: 1230,
      msg: 'email not valid in payment'
    }
    res.send(errRes);
  }


  if (!paymentDetails.customerPhone) {
    errRes.error = {
      code: 1231,
      msg: 'Phone not valid in payment'
    }
    res.send(errRes);
  }
  if (!paymentDetails.amount) {
    errRes.error = {
      code: 1232,
      msg: 'Amount not valid in payment'
    }
    res.send(errRes);
  }
  if (!paymentDetails.customerId) {
    errRes.error = {
      code: 1233,
      msg: 'FarmerId not valid in payment'
    }
    res.send(errRes);
  }

  let schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    mobile: Joi.string().min(5).max(50).required().pattern(/^[0-9]+$/),
    farmerId: Joi.string().min(5).max(50).required().token(),
    amount: Joi.number().integer().required()
  });
  let { error } = schema.validate({
    email: paymentDetails.customerEmail,
    mobile: paymentDetails.customerPhone,
    amount: paymentDetails.amount,
    farmerId: paymentDetails.customerId
  });
  if (error) {
    errRes.error = {
      code: 1230,
      msg: error.details[0].message
    }
    res.send(errRes);
  }


  const params = {};
  params.MID = config.PaytmConfig.mid;
  params.WEBSITE = config.PaytmConfig.website;
  params.CHANNEL_ID = 'WEB';
  params.INDUSTRY_TYPE_ID = 'Retail';
  params.ORDER_ID = `TEST_${new Date().getTime()}`;
  params.CUST_ID = paymentDetails.customerId;
  params.TXN_AMOUNT = paymentDetails.amount;
  params.CALLBACK_URL = `http://localhost:${PORT}${version}/payment/callback`;
  params.EMAIL = paymentDetails.customerEmail;
  params.MOBILE_NO = paymentDetails.customerPhone;

  checksum_lib.genchecksum(params, config.PaytmConfig.key, (err, checksum) => {
    const txn_url = 'https://securegw-stage.paytm.in/theia/processTransaction'; // for staging
    // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
    let form_fields = '';
    for (const x in params) {
      form_fields += `<input type='hidden' name='${x}' value='${params[x]}' >`;
    }
    form_fields += `<input type='hidden' name='CHECKSUMHASH' value='${checksum}' >`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="${txn_url}" name="f1">${form_fields}</form><script type="text/javascript">document.f1.submit();</script></body></html>`);
    res.end();
  });

};

exports.paynow = pay_now;
