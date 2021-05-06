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
	isAuthenticated,

} = require('../controllers/farmer/');

// Router Settings
// router.use(isAuthenticated)

router.post('/register', register);
router.post('/login', login);
router.get('/getProfile', isAuthenticated, getProfile);
router.get('/getWarehouses', isAuthenticated, getWarehouses);
router.get('/getCrops', isAuthenticated, getCrops);
router.post('/addCrop', isAuthenticated, addCrop);
router.post('/paynow', isAuthenticated, paynow);
router.post('/callback', callback);
router.get('/getEditProfile', isAuthenticated, getEditProfile);
router.post('/editProfile', isAuthenticated, editProfile);
router.get('/logout', logout);
router.get('/getPayment', isAuthenticated, getPayment);
router.get('/getCrop', isAuthenticated, getCrop);
// Export the router
module.exports = router;
