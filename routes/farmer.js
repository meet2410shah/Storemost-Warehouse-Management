const express = require('express');

const router = express.Router();

const { registerFarmer } = require('../controllers/farmer/register');

router.post('/register', registerFarmer);

module.exports = router;
