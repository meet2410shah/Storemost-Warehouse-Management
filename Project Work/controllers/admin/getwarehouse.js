const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');


const getWarehouses = async function (req, res) {

    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1120,
            msg: "No warehouse found"
        }
    }

    const Warehouses = await Warehouse.find();
    console.log(Warehouses);
    if (!Warehouses) {
        res.send(errRes);
    }

    const resObj = {
        success: true,
        data: Warehouses,
        error: null
    };
    res.send(resObj);
}

module.exports = getWarehouses
