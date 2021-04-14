const _ = require('lodash');
const { Warehouse, Farmer } = require('../../database/models');


const listFarmerByWarehouseId = async function (req, res) {

    // console.log(req);
    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1100,
            msg: "Email not added in request"
        }
    }

    const wid = req.body.warehouseId;
    if (!wid) {
        errRes.error = {
            code: 1110,
            msg: "Warehouse id not found in request"
        }

        return res.send(errRes);
    }
    res.send(await Farmer.find());

    let warehouselist;
    try {
        warehouselist = await Warehouse.findOne({
            warehouseId: wid
        });
    } catch {
        errRes.error = {
            code: 1061,
            msg: "Warehouse not found in database"
        }
        return res.send(errRes);
    }
    // console.log(warehouse);
    if (!warehouselist) {
        errRes.error = {
            code: 1061,
            msg: "Warehouse not found in database"
        }
        return res.send(errRes);
    }

    let FarmersList
    try {
        FarmersList = await Farmer.find({
            crops: { $elemMatch: { warehouseId: wid } },
        });
        // FarmersList = await Farmer.aggregate([
        //     { $match: { crops: { $elemMatch: { warehouseId: wid } } } }
        // ])
    } catch {
        errRes.error = {
            code: 1064,
            msg: "No Farmer found in given warehouse"
        }
        return res.send(errRes);
    }

    if (!FarmersList) {
        errRes.error = {
            code: 1064,
            msg: "No Farmer found in given warehouse"
        }
        return res.send(errRes);
    }
    // console.log(FarmersList);
    const resObj = {
        success: true,
        data: FarmersList,
        error: null,
    };
    res.send(resObj);
};

module.exports = listFarmerByWarehouseId;
