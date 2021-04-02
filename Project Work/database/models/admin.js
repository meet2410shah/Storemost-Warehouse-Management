const mongoose = require('mongoose');

const adminSchema = mongoose.model('Admin', new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
}));

exports.User = adminSchema;
