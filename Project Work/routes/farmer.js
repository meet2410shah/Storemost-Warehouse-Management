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
} = require('../controllers/farmer/');

// Router Settings
router.post('/register', register);
router.post('/login', login);
router.post('/getProfile', getProfile);
router.get('/getWarehouses', getWarehouses);
router.post('/getCrops', getCrops);
router.post('/addCrop', addCrop);

router.post('/paynow', paynow);
router.post('/callback', callback);
// Export the router
module.exports = router;
