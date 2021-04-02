const express = require('express');

const router = express.Router();

const { authorizeAdmin } = require('../controllers/auth/admin');
const { authorizeSuper } = require('../controllers/auth/super');
const { authorizeFarmer } = require('../controllers/auth/farmer');

// router.post("/admin",authorize_admin);
// router.post("/supervisor",authorize_super);
// router.post("/farmer",authorize_farmer);

router.post('/admin', authorizeAdmin);
router.post('/supervisor', authorizeSuper);
router.post('/farmer', authorizeFarmer);

module.exports = router;
