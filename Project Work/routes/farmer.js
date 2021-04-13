// Required Modules
const router = require('express').Router();

// Controllers
const { register, getProfile } = require('../controllers/farmer/');
const { paynow } = require('../controllers/farmer/paynow.js');
const { callback } = require('../controllers/farmer/callback.js');

// Router Settings
router.post('/register', register);
router.get('/getProfile', getProfile);

router.post('/paynow', paynow);
router.post('/callback', callback);
// Export the router
module.exports = router;
