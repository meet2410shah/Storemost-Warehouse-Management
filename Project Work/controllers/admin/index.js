const register = require("./register")
const login = require("./login")
const addStaff = require('./addStaff');
const addWarehouse = require('./addWarehouse')
const editProfile = require('./editProfile')
const getProfile = require('./getProfile')
const getWarehouses = require('./getWarehouses');
const getWarehouseById = require('./getWarehouseById')
const listFarmerByWarehouseId = require('./getWarehouseById')
const listStaffByWarehouseId = require('./listStaffByWarehouseId')

module.exports = {
    register,
    login,
    addStaff,
    addWarehouse,
    editProfile,
    getProfile,
    getWarehouseById,
    getWarehouses,
    listFarmerByWarehouseId,
    listStaffByWarehouseId
}


// error-> err
// tokan 
//payment 
//available storage to warehoues
//