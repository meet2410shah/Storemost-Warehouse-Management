const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');
const Farmers = require('../../database/models/farmer');


const ListStaff = async function (req, res) {

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
        res.send(errRes);
    }
    const StaffList = await Warehouse.find({
        warehouseId: wid
    });
    const resObj = {
        success: true,
        data: StaffList,
        error: null
    };
    res.send(resObj);
}

module.exports = ListStaff;
