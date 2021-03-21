const express = require('express');
const router = express.Router();


const { paynow } = require('../controllers/payment/paynow.js');


router.post('/paynow', paynow);



module.exports = router;