const express = require('express');

const router = express.Router();

const {
	register,
	login,
	addStaff,
	addWarehouse,
	editProfile,
	getProfile,
	getWarehouseById,
	getWarehouses,
	listFarmerByWarehouseId,
	listStaffByWarehouseId,
	getEditProfile,
	logout,
} = require('../controllers/admin/');

router.post('/register', register);

router.post('/login', login);

router.get('/getProfile', getProfile);

router.post('/editProfile', editProfile);
router.get('/getEditProfile', getEditProfile);

router.get('/getWarehouses', getWarehouses);

router.post('/getWarehouseById', getWarehouseById);

router.post('/listFarmerByWarehouseId', listFarmerByWarehouseId);

router.post('/listStaffByWarehouseId', listStaffByWarehouseId);

router.post('/addWarehouse', addWarehouse);

router.post('/addStaff', addStaff);
router.get('/logout', logout);

module.exports = router;
