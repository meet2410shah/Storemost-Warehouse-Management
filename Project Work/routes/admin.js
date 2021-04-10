const express = require('express');

const router = express.Router();

const { registerAdmin } = require('../controllers/admin/register');

const getWarehouses = require('../controllers/admin/getwarehouse');

const getWarehousesById = require('../controllers/admin/getwarehousebyid');

const ListFarmerByWID = require('../controllers/admin/listfarmerbywid');

const ListStaffByWID = require('../controllers/admin/liststaffbywid');

const getProfile = require('../controllers/admin/getProfile');

const editProfile = require('../controllers/admin/editProfile');

router.post('/register', registerAdmin);

router.get('/getProfile', getProfile);

router.post('/editProfile', editProfile);

router.get("/getWarehouses", getWarehouses);

router.post('/getWarehousesById', getWarehousesById);

router.post("/ListFarmerByWID", ListFarmerByWID);

router.post('/ListStaffByWID', ListStaffByWID);



module.exports = router;
