const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
  crop: [
    {
      storage_time: Date,
      quantity: Number,
      warehouse_id: String,
      payment_id: String,
      type: String,
    }
  ]
});

module.exports = mongoose.model(`Farmer`, farmerSchema);
