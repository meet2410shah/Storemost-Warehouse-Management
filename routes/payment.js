const express = require('express');
const router = express.Router();

const { paynow } = require('../controllers/payment/paynow.js');
const { callback } = require('../controllers/payment/callback.js')

router.post('/paynow', paynow);
router.post('/callback', callback);

module.exports = router;