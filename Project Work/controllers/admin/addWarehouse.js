const { all } = require('lodash');
const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');
const { validate } = require('./validatewarehouse');
const addWarehouse = async function (req, res) {

    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1052,
            msg: "Warehouse name is empty"
        }
    }
    if (!req.body.name) {
        res.send(errRes);
    }
    if (!req.body.storage) {
        errRes.error = {
            code: 1053,
            msg: "storage is empty"
        }
        res.send(errRes);
    }
    if (!req.body.address) {
        errRes.error = {
            code: 1054,
            msg: "address is empty"
        }
        res.send(errRes);
    }

    let warehouse = {
        name: req.body.name,
        storage: Number(req.body.storage),
        location: {
            address: req.body.address,
        }
    }
    const { error } = validate(warehouse);
    if (error) {
        errRes.error = {
            code: 400,
            msg: error.details[0].message
        }
        res.send(errRes);
    }
    warehouse.warehouseId = await Warehouse.count() + 1;
    console.log(warehouse);
    warehouse = new Warehouse(warehouse);
    await warehouse.save();

    const warehouses = await Warehouse.find({});
    console.log(warehouses);
    const resObj = {
        success: true,
        data: warehouses,
        error: null
    };
    res.send(resObj);


}

module.exports = addWarehouse;
