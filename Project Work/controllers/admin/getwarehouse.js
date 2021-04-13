
// req.params
// req.query
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

    let filters = {
        sort: "ASC",
        filter: "NAME",
    }
    if (req.query.sort) {
        filters.sort = req.query.sort;
    }
    if (req.query.filter) {
        filters.filter = req.query.filter;
    }
    const resObj = {
        success: true,
        data: Warehouses,
        error: null
    };
    res.send(resObj);
}

module.exports = getWarehouses
