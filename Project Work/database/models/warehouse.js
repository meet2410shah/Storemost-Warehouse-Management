const mongoose = require('mongoose');

const warehouseSchema = mongoose.model('Warehouse', new mongoose.Schema({
  description: String,
  location: {
    address: String,
    longitude: Number,
    latitude: Number,
  },
  storage: Number,
  staffDetails: [
    {
      staffId: String,
      firstName: String,
      lastName: String,
      salary: Number,
      role: String,
      mobile: String,
    },
  ],
}));

exports.warehouseUser = warehouseSchema;
