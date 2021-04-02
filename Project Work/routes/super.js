const express = require('express');

const router = express.Router();

const { registerSuper } = require('../controllers/supervisor/register');

router.post('/register', registerSuper);

module.exports = router;
