// Required Modules
const router = require('express').Router();

// Controllers
const {
	register,
	getProfile,
	getWarehouses,
	getCrops,
	addCrop,
	login,
	paynow,
	callback,
	getEditProfile,
	editProfile,
	logout,
	getPayment,
	getCrop,
} = require('../controllers/farmer/');

// Router Settings
router.post('/register', register);
router.post('/login', login);
router.get('/getProfile', getProfile);
router.get('/getWarehouses', getWarehouses);
router.get('/getCrops', getCrops);
router.post('/addCrop', addCrop);
router.post('/paynow', paynow);
router.post('/callback', callback);
router.get('/getEditProfile', getEditProfile);
router.post('/editProfile', editProfile);
router.get('/logout', logout);
router.get('/getPayment', getPayment);
router.get('/getCrop', getCrop);
// Export the router
module.exports = router;
