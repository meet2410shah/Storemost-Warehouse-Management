const router = require('express').Router();

// Controllers
const { get } = require('../controllers/admin/');

router.get('/', get);

module.exports = router;