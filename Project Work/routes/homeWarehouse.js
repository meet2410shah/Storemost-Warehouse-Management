const router = require('express').Router();

const { homeWarehouse } = require('../controllers/warehouse');

router.get('/list', homeWarehouse);

module.exports = router;
