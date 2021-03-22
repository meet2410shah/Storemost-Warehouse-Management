const express = require('express');

const router = express.Router();

const { authorize_admin } = require('../controllers/auth/auth_admin');
const { authorize_super } = require('../controllers/auth/auth_super');
const { authorize_farmer } = require('../controllers/auth/auth_farmer');

// router.post("/admin",authorize_admin);
// router.post("/supervisor",authorize_super);
// router.post("/farmer",authorize_farmer);

router.post('/admin', authorize_admin);
router.post('/supervisor', authorize_super);
router.post('/farmer', authorize_farmer);

module.exports = router;
