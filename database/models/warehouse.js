const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
  description: String,
  location: {
    address: String,
    longitude: Number,
    latitude: Number
  },
  storage: Number,
  staff_details: [
    {
      staff_id: String,
      first_name: String,
      last_name: String,
      salary: Number,
      role: String,
      mobile: String
    }
  ]
});

module.exports = mongoose.model(`Warehouse`, warehouseSchema);
