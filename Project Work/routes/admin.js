const router = require('express').Router();

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
	isAuthenticated,
	logout,
} = require('../controllers/admin/');

router.post('/register', register);
router.post('/login', login);

router.use(isAuthenticated);
router.get('/getProfile', getProfile);
router.get('/getEditProfile', getEditProfile);
router.get('/getWarehouses', getWarehouses);
router.post('/editProfile', editProfile);
router.post('/getWarehouseById', getWarehouseById);
router.post('/getFarmersList', getFarmersList);
router.post('/getStaffList', getStaffList);
router.post('/addWarehouse', addWarehouse);
router.post('/addStaff', addStaff);
router.get('/logout', logout);

module.exports = router;
