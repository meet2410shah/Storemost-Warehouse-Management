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
<<<<<<< HEAD
        return  res.send(errRes);
    }
    const StaffList = await Warehouse.findOne({
=======
        res.send(errRes);
    }
    const StaffList = await Warehouse.find({
>>>>>>> origin/master
        warehouseId: wid
    });
    const resObj = {
        success: true,
<<<<<<< HEAD
        data: StaffList.staffDetails,
=======
        data: StaffList,
>>>>>>> origin/master
        error: null
    };
    res.send(resObj);
}

module.exports = ListStaff;
