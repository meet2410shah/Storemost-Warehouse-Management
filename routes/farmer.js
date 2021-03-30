// Required Modules
const router = require('express').Router();

// Controllers
const { register, getProfile } = require('../controllers/farmer/');

// Router Settings
router.post('/register', register);
router.get('/getProfile', getProfile);

// Export the router
module.exports = router;
