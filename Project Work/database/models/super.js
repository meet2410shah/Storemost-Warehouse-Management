const mongoose = require('mongoose');

const superSchema = mongoose.model('Super', new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
  warehouseId: String,
}));

exports.User = superSchema;
