const express = require('express');

const router = express.Router();

const { register_farmer } = require('../controllers/farmer/register_farmer');

router.post('/register', register_farmer);

module.exports = router;
