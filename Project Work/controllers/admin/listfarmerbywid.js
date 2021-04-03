const _ = require('lodash');
const Warehouse = require('../../database/models/warehouse');
const Farmers = require('../../database/models/farmer');


const ListFarmer = async function (req, res) {

    const wid = req.body.wid;

    const FarmersList = await Farmers.find({
        crop: {
            $elemMatch: { warehouseId: wid }
        }
    });
    res.send(FarmersList);
}

module.exports = ListFarmer;
