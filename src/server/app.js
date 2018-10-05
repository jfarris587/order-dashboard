const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Order = require('./models/order');

const app = express();
const port = process.env.PORT || 9000;


var uri = 'mongodb+srv://jfarris587:sniffles99@cluster0-kfjav.mongodb.net/bizboard';
mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});


app.get('/api/orders', function(req, res){
  Order.find({},function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     res.send(docs);
   });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
