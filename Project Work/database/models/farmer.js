const mongoose = require('mongoose');

module.exports = mongoose.model('Farmer', new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
  crop: [
    {
      storageTime: Date,
      quantity: Number,
      warehouseId: String,
      paymentId: String,
      type: String,
    },
  ],
}));
