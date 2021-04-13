const router = require('express').Router();

const { registerSuper } = require('../controllers/supervisor/register');
const { farmerList } = require('../controllers/supervisor/farmerList');
const { getProfile } = require('../controllers/supervisor/getProfile');
const { editProfile } = require('../controllers/supervisor/editProfile');
const { staffList } = require('../controllers/supervisor/staffList');

router.post('/register', registerSuper);
router.get('/farmerList', farmerList);
router.get('/getProfile', getProfile);
router.post('/editProfile', editProfile);
router.get('/staffList', staffList);

module.exports = router;
