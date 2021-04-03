const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');
const Farmers = require('../../database/models/farmer');


const ListFarmer = async function (req, res) {

    const wid = req.body.wid;
    if (!wid) {
        res.send('error');
    }
    const warehouse = await Warehouse.findOne({
        _id: wid
    });
    if (!warehouse) {
        res.send('error');
    }

    const FarmersList = await Farmers.find({
        crop: {
            $elemMatch: { warehouseId: wid }
        }
    });
    res.send(FarmersList);
}

module.exports = ListFarmer;
