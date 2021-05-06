const router = require('express').Router();

const {
	register,
	login,
	editProfile,
	getProfile,
  getEditProfile,
	logout,
  getFarmers,
  getStaff,
	isAuthenticated
} = require('../controllers/supervisor');

// router.use(isAuthenticated);
router.post('/register', register);
router.post('/login', login);
router.get('/getFarmers', isAuthenticated, getFarmers);
router.get('/getProfile', isAuthenticated, getProfile);
router.post('/editProfile', editProfile);
router.get('/getEditProfile', isAuthenticated, getEditProfile);
router.get('/getStaff', isAuthenticated, getStaff);
router.get('/logout', logout);

module.exports = router;
