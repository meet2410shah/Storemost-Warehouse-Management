const mongoose = require('mongoose');

const { Schema } = mongoose;

const warehouseSchema = new Schema({
  warehouseId: { type: Number, unique: true, required: true, dropDups: true },
  name: { type: String, required: true },
  location: {
    address: String,
    longitude: { type: Number, default: 0.0 },
    latitude: { type: Number, default: 0.0 },
  },
  storage: { type: Number, required: true },
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
