const express = require('express');

const router = express.Router();

const { registerAdmin } = require('../controllers/admin/register');

router.post('/register', registerAdmin);

module.exports = router;
