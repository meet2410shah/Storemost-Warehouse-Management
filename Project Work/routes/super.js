const router = require('express').Router();

const {
	register,
	login,
	editProfile,
	getProfile,
  getEditProfile,
	logout,
  getFarmers,
  getStaff
} = require('../controllers/supervisor');

router.post('/register', register);
router.post('/login', login);
router.get('/getFarmers', getFarmers);
router.get('/getProfile', getProfile);
router.post('/editProfile', editProfile);
router.get('/getEditProfile', getEditProfile);
router.get('/getStaff', getStaff);
router.get('/logout', logout);

module.exports = router;
