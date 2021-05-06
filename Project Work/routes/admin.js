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
	getFarmersList,
	getStaffList,
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

router.post('/getFarmersList', getFarmersList);

router.post('/getStaffList', getStaffList);

router.post('/addWarehouse', addWarehouse);

router.post('/addStaff', addStaff);
router.get('/logout', logout);

module.exports = router;
