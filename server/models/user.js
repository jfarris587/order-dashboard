const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  orders: {
    type: Array,
    required: true
  }
}, {collection: 'users'});


const User = module.exports = mongoose.model('User', orderSchema);
