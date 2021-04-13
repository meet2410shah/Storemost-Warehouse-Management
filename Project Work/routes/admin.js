const express = require('express');

const router = express.Router();

const { registerAdmin } = require('../controllers/admin/register');

const loginAdmin = require('../controllers/admin/login');

const getWarehouses = require('../controllers/admin/getwarehouse');

const getWarehousesById = require('../controllers/admin/getwarehousebyid');

const ListFarmerByWID = require('../controllers/admin/listfarmerbywid');

const ListStaffByWID = require('../controllers/admin/liststaffbywid');

const getProfile = require('../controllers/admin/getProfile');

const editProfile = require('../controllers/admin/editProfile');

const addWarehouse = require('../controllers/admin/addWarehouse');

const addStaff = require('../controllers/admin/addStaff');

router.post('/register', registerAdmin);

router.post('/login', loginAdmin);

router.get('/getProfile', getProfile);

router.post('/editProfile', editProfile);

router.get("/getWarehouses", getWarehouses);

router.post('/getWarehousesById', getWarehousesById);

router.post("/ListFarmerByWID", ListFarmerByWID);

router.post('/ListStaffByWID', ListStaffByWID);

router.post('/addWarehouse', addWarehouse);

router.post('/addStaff', addStaff);

module.exports = router;
