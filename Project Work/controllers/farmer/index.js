const getCrops = require('./getCrops');
const addCrop = require('./addCrop');
const getProfile = require('./getProfile');
const getWarehouses = require('./getWarehouses');
const register = require('./register');
const login = require('./login');
const validate = require('./validate_register');
const paynow = require('./paynow');
const callback = require('./callback');
const getEditProfile = require('./getEditProfile');
const editProfile = require('./editProfile');
const logout = require('./logout');
const getPayment = require('./getPayment');
const getCrop = require('./getCrop');
module.exports = {
	getProfile,
	getWarehouses,
	getCrops,
	addCrop,
	register,
	validate,
	login,
	paynow,
	callback,
	getEditProfile,
	editProfile,
	logout,
	getPayment,
	getCrop,

};
