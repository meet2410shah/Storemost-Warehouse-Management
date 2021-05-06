const getProfile = require('./getProfile');
const editProfile = require('./editProfile');
const getEditProfile = require('./getEditProfile');
const register = require('./register');
const login = require('./login');
const getFarmers = require('./farmerList');
const getStaff = require('./StaffList');
const logout = require('./logout');
const isAuthenticated = require('./isAuthenticated');
// const validate = require('./validate');

module.exports = {
	getProfile,
	register,
	login,
	getFarmers,
	editProfile,
	getEditProfile,
	getStaff,
	logout,
	isAuthenticated
};
