const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');


// console.log(Warehouse);
const getWarehousesById = async function (req, res) {
    // console.log(req);
    const Warehouses = await Warehouse.find();
    console.log(Warehouses);
    if (!Warehouses) {
        res.send('erro');
    }
    res.send(Warehouses);
}

module.exports = getWarehousesById
