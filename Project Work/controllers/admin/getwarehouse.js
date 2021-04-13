
// req.params
// req.query
const { _filter } = require('lodash');
const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');

const { checkCookie } = require('../cookies/checkCookie')

const getWarehouses = async function (req, res) {

    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1120,
            msg: "No warehouse found"
        }
    }
    const objt = checkCookie(req.cookies);

    const mainObj = JSON.parse(objt.cookiedata);

    let sortfilter = {
        "sort": "asc",
        "filter": "name"
    }

    if (req.query.sort) {
        sortfilter.sort = req.query.sort;
    }
    if (req.query.filter) {
        sortfilter.filter = req.query.filter;
    }

    const sortObj = {}

    let typ = 1;
    if (sortfilter.sort == "desc") {
        typ = -1;
    }
    sortObj[sortfilter.filter] = sortfilter.sort
    console.log(sortObj);

    let warehouses;
    if (sortfilter.filter == "storage")
        warehouses = await Warehouse.find().select({ "warehouseId": 1, "name": 1, "storage": 1, "location": 1, "_id": 0 }).sort(sortObj);
    else {
        warehouses = await Warehouse.aggregate([
            { $project: { _id: 0, lname: { $toLower: "$name" }, location: 1, storage: 1, name: 1, warehouseId: 1 } },
            { $sort: { "lname": typ } },
            { $project: { _warehouseId: "$warehouseId", _name: "$name", _storage: "$storage", _location: "$location" } },
            { $project: { warehouseId: "$_warehouseId", name: "$_name", storage: "$_storage", location: "$_location" } }]
        );
    }

    console.log(warehouses);
    if (!warehouses) {
        return res.send(errRes);
    }
    let resObj = {
        success: true,
        data: warehouses,
        error: null
    };
    res.send(resObj);
}

module.exports = getWarehouses
