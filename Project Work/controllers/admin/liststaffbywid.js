const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');
const Farmers = require('../../database/models/farmer');


const ListStaff = async function (req, res) {

    const wid = req.body.wid;
    if (!wid) {
        res.send('error');
    }
    const StaffList = await Warehouse.find({
        description: req.body.id
    });
    res.send(StaffList);
}

module.exports = ListStaff;
