const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  od: {
    type: String,
    required: true
  },
  dd: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  }
}, {collection: 'orders'});


const Order = module.exports = mongoose.model('Order', orderSchema);
