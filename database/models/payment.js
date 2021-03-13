const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  farmer_id: String,
  warehouse_id: String,
  order_id: String,
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model(`Payment`, paymentSchema);
