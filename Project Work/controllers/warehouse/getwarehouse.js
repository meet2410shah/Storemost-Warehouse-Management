const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');


const getWarehouses = async function (req, res) {
    const Warehouses = await Warehouse.find();
    console.log(Warehouses);
    if (!Warehouses) {
        res.send('erro');
    }
    res.send(Warehouses);
}

module.exports = getWarehouses
