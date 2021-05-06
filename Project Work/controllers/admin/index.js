const register = require('./register');
const login = require('./login');
const addStaff = require('./addStaff');
const addWarehouse = require('./addWarehouse');
const editProfile = require('./editProfile');
const getProfile = require('./getProfile');
const getWarehouses = require('./getWarehouses');
const getWarehouseById = require('./getWarehouseById');
const getFarmersList = require('./getFarmersList');
const getStaffList = require('./getStaffList');
const getEditProfile = require('./getEditProfile');
const logout = require('./logout');

module.exports = {
	register,
	login,
	addStaff,
	addWarehouse,
	editProfile,
	getEditProfile,
	getProfile,
	getWarehouseById,
	getWarehouses,
	getFarmersList,
	getStaffList,
	logout,
};
