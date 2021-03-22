const express = require('express');

const router = express.Router();

const { register_super } = require('../controllers/supervisor/register_super');

router.post('/register', register_super);

module.exports = router;
